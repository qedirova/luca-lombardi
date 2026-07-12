interface Body {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function generateContactHtml(body: Body) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e4e4e7;">

          <!-- Header -->
          <tr>
            <td style="background-color:#18181b;padding:28px 36px;">
              <p style="margin:0;font-size:18px;font-weight:700;color:#ffffff;letter-spacing:0.02em;">
                🛒 Luca Lombardi
              </p>
              <p style="margin:6px 0 0;font-size:13px;color:#a1a1aa;">New contact form submission</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 36px;">

              <p style="margin:0 0 24px;font-size:15px;color:#3f3f46;line-height:1.6;">
                You have received a new message through your website contact form. Here are the details:
              </p>

              <!-- Fields -->
              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f4f4f5;width:30%;vertical-align:top;">
                    <p style="margin:0;font-size:12px;font-weight:700;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.08em;">Name</p>
                  </td>
                  <td style="padding:12px 0 12px 16px;border-bottom:1px solid #f4f4f5;vertical-align:top;">
                    <p style="margin:0;font-size:15px;color:#18181b;">${body.name}</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f4f4f5;vertical-align:top;">
                    <p style="margin:0;font-size:12px;font-weight:700;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.08em;">Email</p>
                  </td>
                  <td style="padding:12px 0 12px 16px;border-bottom:1px solid #f4f4f5;vertical-align:top;">
                    <a href="mailto:${body.email}" style="margin:0;font-size:15px;color:#2563eb;text-decoration:none;">${body.email}</a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f4f4f5;vertical-align:top;">
                    <p style="margin:0;font-size:12px;font-weight:700;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.08em;">Phone</p>
                  </td>
                  <td style="padding:12px 0 12px 16px;border-bottom:1px solid #f4f4f5;vertical-align:top;">
                    <a href="tel:${body.phone}" style="margin:0;font-size:15px;color:#2563eb;text-decoration:none;">${body.phone}</a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;vertical-align:top;">
                    <p style="margin:0;font-size:12px;font-weight:700;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
                  </td>
                  <td style="padding:12px 0 12px 16px;vertical-align:top;">
                    <p style="margin:0;font-size:15px;color:#18181b;line-height:1.7;white-space:pre-line;">${body.message}</p>
                  </td>
                </tr>

              </table>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td>
                    <a href="mailto:${body.email}"
                       style="display:inline-block;padding:11px 24px;background-color:#18181b;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:6px;">
                      Reply to ${body.name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f9f9fb;padding:20px 36px;border-top:1px solid #e4e4e7;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;line-height:1.6;">
                This email was sent automatically from your website contact form.<br/>
                Please do not reply to this email directly — use the button above.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}
