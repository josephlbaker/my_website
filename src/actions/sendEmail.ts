"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../lib/utils";
import ContactFormEmail from "@/src/email/contact_form_email";
import ReactDOMServer from "react-dom/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid senderEmail",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;

  try {
    // const emailContent = React.createElement(ContactFormEmail, {
    //   senderEmail: senderEmail as string,
    //   message: message as string,
    // });

    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "joelucasbaker@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      text: message as string,
      //   react: emailContent,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
