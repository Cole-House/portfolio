"use server"; // this is used to tell Vercel that this function should run on the server

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail =async (formData: FormData) => {
    console.log("running on server")
    const sender = formData.get('senderEmail');
    const message = formData.get('message');

    // simple server-side validation
    if (!validateString(sender, 500)) {
        return {
          error: "Invalid sender email",
        };
      }
      if (!validateString(message, 5000)) {
        return {
          error: "Invalid message",
        };
      }

    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: 'ckmhouse.808@gmail.com',
            subject: "New message from contact form",
            reply_to: sender,
            text: `Email: ${sender}\nMessage: ${message}`
        })
    } catch (error) {
        return {
            error: getErrorMessage(error),
        };
    }

}