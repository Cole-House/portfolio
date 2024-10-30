"use server"; // this is used to tell Vercel that this function should run on the server

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("running on server");
  const sender = formData.get("senderEmail");
  const message = formData.get("message");

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

  let data;

  try {
    // by setting data to the result of the send function, we can return the result of the send function to the client
    data = await resend.emails.send({
      from: " Contact Form <onboarding@resend.dev>",
      to: "ckmhouse.808@gmail.com",
      subject: "New message from contact form",
      reply_to: sender,
      // you need to pass the React component to the html property
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: sender,
      }),
    });
    // Clear the form fields after successful submission
    formData.set("senderEmail", ""); // Clear senderEmail
    formData.set("message", ""); // Clear message
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  //if no error is thrown, return the data
  return {
    data,
  };
};
