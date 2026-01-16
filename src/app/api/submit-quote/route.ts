// File: src/app/api/submit-quote/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration for Zoho
const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_HOST || 'smtp.zoho.com',
  port: parseInt(process.env.ZOHO_PORT || '465'),
  secure: process.env.ZOHO_SECURE === 'true',
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

// Helper function to format the email content
function formatCompanyEmail(data: any) {
  const moveTypes = {
    'residential': 'Residential Move',
    'commercial': 'Commercial Move',
    'long-distance': 'Long Distance Move',
    'vehicle': 'Vehicle Shipping',
  };

  const homeSizes = {
    'studio': 'Studio / 1 Bed',
    '2-3bed': '2-3 Bedroom',
    '4plus': '4+ Bedroom',
    'large': 'Large Home',
  };

  const additionalServices = [
    { id: 'packing', label: 'Professional Packing' },
    { id: 'storage', label: 'Storage Solutions' },
    { id: 'assembly', label: 'Furniture Assembly' },
    { id: 'cleaning', label: 'Move-Out Cleaning' },
  ];

  const selectedServices = data.additionalServices?.map((serviceId: string) => {
    const service = additionalServices.find(s => s.id === serviceId);
    return service ? service.label : serviceId;
  }) || [];

  // Calculate estimate
  const calculateEstimate = () => {
    let base = 0;
    if (data.homeSize === 'studio') base = 1200;
    if (data.homeSize === '2-3bed') base = 2500;
    if (data.homeSize === '4plus') base = 4500;
    if (data.homeSize === 'large') base = 6500;

    const serviceCost = data.additionalServices?.length * 300 || 0;
    const distanceCost = data.origin && data.destination ? 500 : 0;

    return base + serviceCost + distanceCost;
  };

  return {
    subject: `🎯 New Quote Request - ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: #0A2540;
            color: white;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }
          .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .section {
            background: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            border-left: 4px solid #D4AF37;
          }
          .label {
            font-weight: bold;
            color: #0A2540;
          }
          .value {
            color: #666;
          }
          .highlight {
            color: #D4AF37;
            font-weight: bold;
          }
          .estimate-box {
            background: linear-gradient(135deg, #0A2540, #1a3a5f);
            color: white;
            padding: 25px;
            border-radius: 10px;
            text-align: center;
            margin: 20px 0;
          }
          .services-list {
            list-style: none;
            padding: 0;
          }
          .services-list li {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #0A2540;
            text-align: center;
            color: #666;
            font-size: 12px;
          }
          .urgent {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🚚 New Quote Request</h1>
          <p>Submitted: ${new Date().toLocaleString()}</p>
        </div>
        
        <div class="content">
          <!-- Contact Information -->
          <div class="section">
            <h2>📋 Contact Information</h2>
            <p><span class="label">Name:</span> <span class="value">${data.name}</span></p>
            <p><span class="label">Email:</span> <span class="value">${data.email}</span></p>
            <p><span class="label">Phone:</span> <span class="value">${data.phone}</span></p>
          </div>

          <!-- Move Details -->
          <div class="section">
            <h2>🚚 Move Details</h2>
            <p><span class="label">Move Type:</span> <span class="value highlight">${moveTypes[data.moveType as keyof typeof moveTypes] || data.moveType}</span></p>
            <p><span class="label">Home Size:</span> <span class="value">${homeSizes[data.homeSize as keyof typeof homeSizes] || data.homeSize}</span></p>
            <p><span class="label">Moving Date:</span> <span class="value">${new Date(data.movingDate).toLocaleDateString()}</span></p>
            <p><span class="label">Timeline:</span> <span class="value">${data.timeline}</span></p>
            <p><span class="label">Route:</span> <span class="value highlight">${data.origin} → ${data.destination}</span></p>
          </div>

          <!-- Additional Services -->
          <div class="section">
            <h2>🔧 Additional Services</h2>
            ${selectedServices.length > 0 ? 
              `<ul class="services-list">
                ${selectedServices.map((service: string) => `<li>✅ ${service}</li>`).join('')}
              </ul>` : 
              '<p>No additional services selected</p>'
            }
          </div>

          <!-- Special Requirements -->
          ${data.specialRequirements ? `
          <div class="section">
            <h2>📝 Special Requirements</h2>
            <p>${data.specialRequirements}</p>
          </div>
          ` : ''}

          <!-- Estimated Quote -->
          <div class="estimate-box">
            <h3 style="margin: 0 0 10px 0;">💰 Estimated Quote</h3>
            <div style="font-size: 32px; font-weight: bold; margin: 10px 0;">$${calculateEstimate().toLocaleString()}</div>
            <p style="font-size: 14px; opacity: 0.9;">Based on provided information</p>
          </div>

          <!-- Urgent Notice -->
          <div class="urgent">
            <strong>⏱️ ACTION REQUIRED:</strong> Customer expects response within 30 minutes. Please contact them ASAP.
          </div>

          <!-- Action Steps -->
          <div class="section">
            <h2>🎯 Quick Actions</h2>
            <p>1. <strong>Reply within 30 minutes</strong> - Send acknowledgment email</p>
            <p>2. <strong>Call customer</strong> - ${data.phone}</p>
            <p>3. <strong>Prepare detailed quote</strong> - Send within 4 hours</p>
            <p>4. <strong>Schedule consultation</strong> - If needed</p>
          </div>

          <!-- Footer -->
          <div class="footer">
            <p><strong>Elvisco De Interstate</strong></p>
            <p>5920 Somerset Rd, Riverdale, MD 20737</p>
            <p>📧 ${process.env.ZOHO_EMAIL} | 📞 (240) 353-2854</p>
            <p>USDOT #: MC-123456 • Fully Licensed & Insured</p>
            <p>This quote request was submitted through the website.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
      NEW QUOTE REQUEST - ${data.name}
      
      Contact Information:
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      
      Move Details:
      Move Type: ${moveTypes[data.moveType as keyof typeof moveTypes] || data.moveType}
      Home Size: ${homeSizes[data.homeSize as keyof typeof homeSizes] || data.homeSize}
      Moving Date: ${new Date(data.movingDate).toLocaleDateString()}
      Timeline: ${data.timeline}
      Route: ${data.origin} → ${data.destination}
      
      Additional Services: ${selectedServices.length > 0 ? selectedServices.join(', ') : 'None'}
      
      ${data.specialRequirements ? `Special Requirements: ${data.specialRequirements}` : ''}
      
      Estimated Quote: $${calculateEstimate().toLocaleString()}
      
      ACTION REQUIRED: Customer expects response within 30 minutes. Please contact them ASAP.
      
      Quick Actions:
      1. Reply within 30 minutes
      2. Call customer: ${data.phone}
      3. Prepare detailed quote within 4 hours
      
      ---
      Elvisco De Interstate
      5920 Somerset Rd, Riverdale, MD 20737
      Email: ${process.env.ZOHO_EMAIL}
      Phone: (240) 353-2854
    `,
  };
}

function formatCustomerEmail(data: any) {
  const moveTypes = {
    'residential': 'Residential Move',
    'commercial': 'Commercial Move',
    'long-distance': 'Long Distance Move',
    'vehicle': 'Vehicle Shipping',
  };

  const homeSizes = {
    'studio': 'Studio / 1 Bed',
    '2-3bed': '2-3 Bedroom',
    '4plus': '4+ Bedroom',
    'large': 'Large Home',
  };

  const additionalServices = [
    { id: 'packing', label: 'Professional Packing' },
    { id: 'storage', label: 'Storage Solutions' },
    { id: 'assembly', label: 'Furniture Assembly' },
    { id: 'cleaning', label: 'Move-Out Cleaning' },
  ];

  const selectedServices = data.additionalServices?.map((serviceId: string) => {
    const service = additionalServices.find(s => s.id === serviceId);
    return service ? service.label : serviceId;
  }) || [];

  const calculateEstimate = () => {
    let base = 0;
    if (data.homeSize === 'studio') base = 1200;
    if (data.homeSize === '2-3bed') base = 2500;
    if (data.homeSize === '4plus') base = 4500;
    if (data.homeSize === 'large') base = 6500;

    const serviceCost = data.additionalServices?.length * 300 || 0;
    const distanceCost = data.origin && data.destination ? 500 : 0;

    return base + serviceCost + distanceCost;
  };

  return {
    subject: '✅ Your Quote Request Has Been Received - Elvisco De Interstate',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #0A2540, #1a3a5f);
            color: white;
            padding: 40px 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }
          .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .section {
            background: white;
            padding: 25px;
            border-radius: 8px;
            margin-bottom: 25px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .highlight {
            color: #D4AF37;
            font-weight: bold;
          }
          .cta-button {
            display: inline-block;
            background: linear-gradient(to right, #D4AF37, #fbbf24);
            color: #0A2540;
            padding: 14px 30px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            margin: 10px 5px;
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
          }
          .timeline {
            display: flex;
            justify-content: space-between;
            margin: 30px 0;
          }
          .timeline-step {
            text-align: center;
            flex: 1;
            padding: 15px;
          }
          .timeline-icon {
            width: 50px;
            height: 50px;
            background: #D4AF37;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 10px;
            color: white;
            font-size: 20px;
          }
          .summary-box {
            background: linear-gradient(135deg, #f8f9fa, #ffffff);
            border: 2px solid #D4AF37;
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
          }
          .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #0A2540;
            text-align: center;
            color: #666;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 style="margin: 0 0 10px 0;">✅ Quote Request Received!</h1>
          <p style="margin: 0; font-size: 18px;">Thank you for choosing Elvisco De Interstate</p>
        </div>
        
        <div class="content">
          <!-- Greeting -->
          <div class="section">
            <h2>Dear ${data.name},</h2>
            <p>Thank you for requesting a quote from <span class="highlight">Elvisco De Interstate</span>! We have received your request and our team is already working on preparing your personalized quote.</p>
            
            <div class="summary-box">
              <h3 style="margin-top: 0;">📋 Your Request Summary</h3>
              <p><strong>Move Type:</strong> ${moveTypes[data.moveType as keyof typeof moveTypes] || data.moveType}</p>
              <p><strong>Home Size:</strong> ${homeSizes[data.homeSize as keyof typeof homeSizes] || data.homeSize}</p>
              <p><strong>Moving Date:</strong> ${new Date(data.movingDate).toLocaleDateString()}</p>
              <p><strong>Route:</strong> ${data.origin} → ${data.destination}</p>
              ${selectedServices.length > 0 ? `<p><strong>Additional Services:</strong> ${selectedServices.join(', ')}</p>` : ''}
              <p><strong>Preliminary Estimate:</strong> <span style="color: #D4AF37; font-weight: bold;">$${calculateEstimate().toLocaleString()}</span></p>
              <p style="font-size: 12px; color: #666;">*This is a preliminary estimate. Final quote may vary based on detailed assessment.</p>
            </div>
          </div>

          <!-- Timeline -->
          <div class="section">
            <h2>⏱️ What Happens Next</h2>
            <div class="timeline">
              <div class="timeline-step">
                <div class="timeline-icon">1</div>
                <h4>Within 30 minutes</h4>
                <p style="font-size: 14px;">Our expert reviews your request</p>
              </div>
              <div class="timeline-step">
                <div class="timeline-icon">2</div>
                <h4>Within 1 hour</h4>
                <p style="font-size: 14px;">We'll call to confirm details</p>
              </div>
              <div class="timeline-step">
                <div class="timeline-icon">3</div>
                <h4>Within 4 hours</h4>
                <p style="font-size: 14px;">You'll receive detailed quote</p>
              </div>
            </div>
          </div>

          <!-- Immediate Help -->
          <div class="section" style="text-align: center;">
            <h2>🆘 Need Immediate Help?</h2>
            <p>Our moving experts are standing by to answer your questions right now.</p>
            
            <div style="margin: 20px 0;">
              <a href="tel:2403532854" class="cta-button">📞 Call Now: (240) 353-2854</a>
              <a href="mailto:${process.env.ZOHO_EMAIL}" class="cta-button" style="background: #0A2540; color: white;">✉️ Email Us</a>
            </div>
            
            <p style="color: #666; font-size: 14px;">
              <strong>Business Hours:</strong> 24/7 Emergency Service Available
            </p>
          </div>

          <!-- Footer -->
          <div class="footer">
            <p><strong>Elvisco De Interstate</strong></p>
            <p>5920 Somerset Rd, Riverdale, MD 20737</p>
            <p>📧 ${process.env.ZOHO_EMAIL} | 📞 (240) 353-2854</p>
            <p>USDOT #: MC-123456 • Fully Licensed & Insured</p>
            <p style="color: #999; margin-top: 20px;">
              This email was sent in response to your quote request. If you did not request a quote, please disregard this message.
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
      ✅ QUOTE REQUEST RECEIVED - Elvisco De Interstate
      
      Dear ${data.name},
      
      Thank you for requesting a quote from Elvisco De Interstate! We have received your request and our team is already working on preparing your personalized quote.
      
      Your Request Summary:
      Move Type: ${moveTypes[data.moveType as keyof typeof moveTypes] || data.moveType}
      Home Size: ${homeSizes[data.homeSize as keyof typeof homeSizes] || data.homeSize}
      Moving Date: ${new Date(data.movingDate).toLocaleDateString()}
      Route: ${data.origin} → ${data.destination}
      Additional Services: ${selectedServices.length > 0 ? selectedServices.join(', ') : 'None'}
      Preliminary Estimate: $${calculateEstimate().toLocaleString()}
      
      *This is a preliminary estimate. Final quote may vary based on detailed assessment.
      
      What Happens Next:
      1. Within 30 minutes: Our expert reviews your request
      2. Within 1 hour: We'll call to confirm details
      3. Within 4 hours: You'll receive detailed quote
      
      Need Immediate Help?
      Call Now: (240) 353-2854
      Email: ${process.env.ZOHO_EMAIL}
      
      Business Hours: 24/7 Emergency Service Available
      
      ---
      Elvisco De Interstate
      5920 Somerset Rd, Riverdale, MD 20737
      Email: ${process.env.ZOHO_EMAIL}
      Phone: (240) 353-2854
      USDOT #: MC-123456 • Fully Licensed & Insured
      
      This email was sent in response to your quote request. If you did not request a quote, please disregard this message.
    `,
  };
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'origin', 'destination', 'moveType', 'homeSize', 'movingDate'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Missing required fields',
          missingFields 
        },
        { status: 400 }
      );
    }

    // Format emails
    const companyEmail = formatCompanyEmail(data);
    const customerEmail = formatCustomerEmail(data);

    // Send email to company (Elvisco)
    const companyMailResult = await transporter.sendMail({
      from: `"Elvisco Website" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL,
      replyTo: data.email,
      subject: companyEmail.subject,
      html: companyEmail.html,
      text: companyEmail.text,
      priority: 'high',
    });

    // Send confirmation email to customer
    const customerMailResult = await transporter.sendMail({
      from: `"Elvisco De Interstate" <${process.env.ZOHO_EMAIL}>`,
      to: data.email,
      subject: customerEmail.subject,
      html: customerEmail.html,
      text: customerEmail.text,
    });

    // Log for debugging (remove in production)
    console.log('Emails sent successfully:', {
      company: companyMailResult.messageId,
      customer: customerMailResult.messageId,
      timestamp: new Date().toISOString(),
    });

    // You could also save to database here
    // await prisma.quoteRequest.create({ data: { ... } });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Quote request submitted successfully. Emails sent to both company and customer.',
        emailIds: {
          company: companyMailResult.messageId,
          customer: customerMailResult.messageId,
        }
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error submitting quote:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit quote request',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
      },
      { status: 500 }
    );
  }
}

// GET endpoint for testing
export async function GET() {
  return NextResponse.json(
    { 
      message: 'Quote submission API is running',
      status: 'active',
      environment: process.env.NODE_ENV,
      zohoConfigured: !!process.env.ZOHO_EMAIL && !!process.env.ZOHO_PASSWORD,
    },
    { status: 200 }
  );
}

