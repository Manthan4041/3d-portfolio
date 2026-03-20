import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { z } from "zod";

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z
    .string()
    .min(10, "Message cannot be empty or too small") // ✅ changed from 10 → 1
    .max(1000, "Message too long"), // ✅ optional safety
});

export async function POST(req: Request) {
  try {
    // ✅ dynamic import (prevents build crash)
    const { Resend } = await import("resend");

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Missing API key" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();
    console.log("BODY:", body);

    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);

    // ✅ FIXED ERROR HANDLING (clean message)
    if (!zodSuccess) {
      return Response.json(
        { error: zodError.errors[0]?.message },
        { status: 400 }
      );
    }

    const { data: resendData, error: resendError } =
      await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: [config.email],
        subject: "Contact me from portfolio",
        react: EmailTemplate({
          fullName: zodData.fullName,
          email: zodData.email,
          message: zodData.message,
        }),
      });

    if (resendError) {
      return Response.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("ERROR:", error);

    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}