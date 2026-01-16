// File: src/lib/mail.ts
import nodemailer from 'nodemailer';

// Email configuration for Zoho (correct settings)
const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_HOST || 'smtp.zoho.com',
  port: parseInt(process.env.ZOHO_PORT || '465'),
  secure: true, // Use SSL for port 465
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // For development only, remove in production if using valid SSL
  },
});

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  subscribe?: boolean;
}

export async function sendContactEmail(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // Test the connection first
    await transporter.verify();

    // Email to company
    await transporter.sendMail({
      from: `"Elvisco Contact Form" <${process.env.ZOHO_EMAIL}>`,
      to: 'contact@elviscodeinterstate.com',
      replyTo: formData.email,
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0A2540 0%, #1a365d 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0A2540; }
            .value { padding: 10px; background: white; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #D4AF37; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; color: white;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.9);">From Elvisco De Interstate Website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${formData.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${formData.email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${formData.phone}</div>
              </div>
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${formData.subject}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${formData.message.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="field">
                <div class="label">Newsletter Subscription:</div>
                <div class="value">${formData.subscribe ? 'Yes' : 'No'}</div>
              </div>
              <div class="footer">
                <p style="margin: 0;">This email was sent from the contact form on Elvisco De Interstate website.</p>
                <p style="margin: 5px 0 0 0;">Time: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Auto-reply to customer
    await transporter.sendMail({
      from: `"Elvisco De Interstate" <${process.env.ZOHO_EMAIL}>`,
      to: formData.email,
      subject: `Thank you for contacting Elvisco De Interstate`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.8; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
            .header { background: linear-gradient(135deg, #0A2540 0%, #1a365d 100%); color: white; padding: 40px 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .logo { font-size: 32px; font-weight: bold; color: #D4AF37; margin-bottom: 10px; }
            .content { padding: 40px 30px; }
            .message-box { background: #f8f9fa; border-left: 4px solid #D4AF37; padding: 20px; margin: 25px 0; border-radius: 0 5px 5px 0; }
            .info-box { background: linear-gradient(135deg, #fef9e7 0%, #fef3cd 100%); border: 1px solid #D4AF37; border-radius: 10px; padding: 25px; margin: 30px 0; }
            .footer { background: #0A2540; color: white; padding: 30px; text-align: center; border-radius: 0 0 10px 10px; }
            .contact-info { display: flex; flex-wrap: wrap; gap: 20px; margin: 30px 0; }
            .contact-item { flex: 1; min-width: 200px; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center; }
            .btn { display: inline-block; background: linear-gradient(135deg, #D4AF37 0%, #c19b2e 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">Elvisco De Interstate</div>
              <h1 style="margin: 10px 0; color: white;">Thank You for Contacting Us!</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 0;">Premium Moving Services</p>
            </div>
            
            <div class="content">
              <p>Dear <strong>${formData.name}</strong>,</p>
              
              <div class="message-box">
                <p style="margin: 0; color: #0A2540; font-size: 18px;">
                  We have received your message regarding <strong>"${formData.subject}"</strong> and appreciate you reaching out to Elvisco De Interstate.
                </p>
              </div>
              
              <p>Our team is reviewing your inquiry and we will get back to you within <strong>24 hours</strong> during business days.</p>
              
              <div class="info-box">
                <h3 style="color: #0A2540; margin-top: 0;">📋 Your Inquiry Details:</h3>
                <p><strong>Reference ID:</strong> ELV-${Date.now().toString().slice(-6)}</p>
                <p><strong>Received:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>Subject:</strong> ${formData.subject}</p>
                ${formData.subscribe ? '<p><strong>✓</strong> You are subscribed to our newsletter for moving tips and special offers.</p>' : ''}
              </div>
              
              <div class="contact-info">
                <div class="contact-item">
                  <h4 style="color: #0A2540; margin-top: 0;">📞 Call Us</h4>
                  <p style="font-size: 18px; font-weight: bold; color: #D4AF37;">+1 (240) 353-2854</p>
                  <p style="font-size: 14px; color: #666;">24/7 Emergency Support</p>
                </div>
                <div class="contact-item">
                  <h4 style="color: #0A2540; margin-top: 0;">📍 Visit Us</h4>
                  <p>5920 Somerset Rd<br>Riverdale, MD 20737</p>
                </div>
              </div>
              
              <p>For urgent matters, please call our 24/7 support line at <strong>+1 (240) 353-2854</strong>.</p>
              
              <p style="text-align: center; margin-top: 30px;">
                <a href="https://elviscodeinterstate.com" class="btn">Visit Our Website</a>
              </p>
            </div>
            
            <div class="footer">
              <p style="margin: 0 0 10px 0; font-size: 14px;">
                <strong>Elvisco De Interstate</strong><br>
                Premium Moving Services Across the U.S.
              </p>
              <p style="margin: 0; font-size: 12px; opacity: 0.8;">
                This is an automated confirmation email. Please do not reply to this message.<br>
                © ${new Date().getFullYear()} Elvisco De Interstate. All rights reserved.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return { success: true, message: 'Message sent successfully! You will receive a confirmation email shortly.' };
  } catch (error) {
    console.error('Email sending error:', error);
    return { 
      success: false, 
      message: 'Failed to send message. Please try again or call us at +1 (240) 353-2854.' 
    };
  }
}