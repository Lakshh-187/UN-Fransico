import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const value: any = data.get("mail");
  const resend = new Resend(process.env.RESEND_API_KEY ?? "");
  try {
    const data = await resend.emails.send({
      from: "Onboarding@uniwave.org",
      to: [value],
      subject: "Welcome to Uniwave",
      html: `
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #333;">Welcome to Uniwave!</h1>
        </div>
        <div style="color: #555;">
            <p>Dear User,</p>
            <p>We are thrilled to welcome you to Uniwave, your go-to platform for all things productivity and collaboration.</p>
            <p>With Uniwave, you can streamline your work, collaborate seamlessly with your team, and achieve your goals more efficiently than ever before.</p>
            <p>Feel free to explore our platform and discover the plethora of features designed to make your work life easier.</p>
            <p>Get started now by clicking the button below:</p>
            <p><a href="#" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Get Started</a></p>
            <p>If you have any questions or need assistance, don't hesitate to contact our support team. We're here to help!</p>
            <p>Best regards,<br>The Uniwave Team</p>
        </div>
        <div style="text-align: center; margin-top: 20px; color: #777;">
            <p>You are receiving this email because you signed up for Uniwave. If you believe this email was sent to you in error, please disregard it.</p>
        </div>
    </div>
</body>
      `,
      tags: [
        {
          name: "category",
          value: "confirm_email",
        },
      ],
    });
    console.log(data);

    return NextResponse.json({
      status: "Email Sent",
    });
  } catch (error) {
    return NextResponse.json({
      error: error,
    });
  }
}
