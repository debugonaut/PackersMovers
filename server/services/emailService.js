import { Resend } from 'resend';

/**
 * Sends a contact-form enquiry email via Resend.
 *
 * @param {{ name: string, phone: string, service: string, message?: string }} data
 * @returns {Promise<object>} Resend API response
 */
export async function sendEnquiry({ name, phone, service, message }) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error(
      'RESEND_API_KEY is not configured. Set it in your .env file.'
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const submittedAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
  });

  const displayMessage = message || 'N/A';

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
      <!-- Header Banner -->
      <div style="background-color: #111827; padding: 32px 24px; text-align: center; border-bottom: 4px solid #E8480A;">
        <div style="background-color: #E8480A; width: 44px; height: 44px; border-radius: 22px; line-height: 44px; text-align: center; margin: 0 auto 16px; color: #ffffff !important; font-weight: 800; font-size: 16px; letter-spacing: -0.03em; box-shadow: 0 2px 4px rgba(0,0,0,0.15);">SM</div>
        <h1 style="color: #ffffff !important; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.025em; line-height: 1.2;">SwiftMove Packers &amp; Movers</h1>
        <p style="color: #ff8c53 !important; margin: 8px 0 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; line-height: 1;">New Enquiry Received</p>
      </div>

      <!-- Content -->
      <div style="padding: 32px 24px; background-color: #ffffff;">
        <h2 style="color: #111827 !important; margin: 0 0 20px 0; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Enquiry Details</h2>
        
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%;">
          <tr>
            <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563 !important; font-size: 14px; width: 120px;">Name</td>
            <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827 !important; font-size: 15px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563 !important; font-size: 14px;">Phone</td>
            <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827 !important; font-size: 15px; font-family: monospace; font-weight: bold; letter-spacing: 0.05em;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563 !important; font-size: 14px;">Service</td>
            <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827 !important; font-size: 15px; text-transform: capitalize;">${service.replace('-', ' ')}</td>
          </tr>
          <tr>
            <td style="padding: 16px 0 0 0; font-weight: 600; color: #4b5563 !important; font-size: 14px; vertical-align: top;">Message</td>
            <td style="padding: 16px 0 0 0; color: #374151 !important; font-size: 15px; line-height: 1.5; white-space: pre-line;">${displayMessage}</td>
          </tr>
        </table>
      </div>

      <!-- Footer -->
      <div style="background-color: #f9fafb; padding: 20px 24px; text-align: center; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0; font-size: 11px; color: #6b7280 !important; line-height: 1.5;">
          Submitted on <strong>${submittedAt} (IST)</strong><br />
          &copy; ${new Date().getFullYear()} SwiftMove Packers &amp; Movers. All rights reserved.
        </p>
      </div>
    </div>
  `;

  try {
    const response = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Enquiry — ${service} from ${name}`,
      html,
    });

    return response;
  } catch (error) {
    throw new Error(
      `Failed to send enquiry email via Resend: ${error.message}`
    );
  }
}
