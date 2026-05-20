import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'missing_key');

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

  const submittedAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
  });

  const displayMessage = message || 'N/A';

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1e3a5f, #2d7d46); padding: 24px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px;">📦 ShiftEase Packers &amp; Movers</h1>
        <p style="color: #d1e8ff; margin: 6px 0 0; font-size: 14px;">New Enquiry Received</p>
      </div>

      <div style="padding: 24px; border: 1px solid #e0e0e0; border-top: none;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555; width: 140px;">Name</td>
            <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; color: #222;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Phone</td>
            <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; color: #222;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Service</td>
            <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; color: #222;">${service}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; color: #555; vertical-align: top;">Message</td>
            <td style="padding: 12px; color: #222;">${displayMessage}</td>
          </tr>
        </table>
      </div>

      <div style="background: #f8f9fa; padding: 16px; text-align: center; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0; border-top: none;">
        <p style="margin: 0; font-size: 12px; color: #888;">
          Submitted on ${submittedAt} (IST) &bull; ShiftEase Packers &amp; Movers
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
