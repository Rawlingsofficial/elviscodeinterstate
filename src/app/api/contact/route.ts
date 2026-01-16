// File: src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail, ContactFormData } from '@/lib/mail';

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      return NextResponse.json(
        { success: false, message: 'Please fill all required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Send email
    const result = await sendContactEmail(formData);

    if (result.success) {
      return NextResponse.json(
        { success: true, message: result.message },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}


