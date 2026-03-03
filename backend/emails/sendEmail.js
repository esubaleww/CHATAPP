import nodemailer from "nodemailer";
import { ENV } from "../lib/env.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ENV.EMAIL_USER,
    pass: ENV.EMAIL_PASS,
  },
});
export const sendEmail = async (to, subject, htmlContent) => {
  const mailOptions = {
    from: `"CHATAPP" <${ENV.EMAIL_USER}>`,
    to,
    subject,
    html: htmlContent,
  };

  return transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.log("Email sent: " + info.response);
      return info;
    })
    .catch((error) => {
      console.error("Error sending email: ", error);
      throw new Error("Failed to send OTP email.");
    });
};
