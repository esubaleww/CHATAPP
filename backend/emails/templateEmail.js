import { ENV } from "../lib/env.js";

export function templateEmail(userName) {
  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to ChatApp</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #f4f4f7;
        font-family: "Helvetica", Arial, sans-serif;
        color: #333333;
      }
      .container {
        max-width: 600px;
        margin: 30px auto;
        background-color: #ffffff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      }
      .header {
        background-color: #4f46e5;
        color: #ffffff;
        text-align: center;
        padding: 30px 20px;
      }
      .header h1 {
        margin: 0;
        font-size: 28px;
      }
      .hero {
        width: 100%;
        display: block;
      }
      .body {
        padding: 25px 20px;
        line-height: 1.6;
      }
      .body p {
        margin-bottom: 15px;
      }
      .button {
        display: inline-block;
        background-color: #4f46e5;
        color: #ffffff;
        padding: 14px 25px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: bold;
        margin-top: 20px;
      }
      .footer {
        background-color: #f4f4f7;
        text-align: center;
        padding: 15px;
        font-size: 12px;
        color: #888888;
      }
      @media (max-width: 620px) {
        .container {
          margin: 15px;
        }
        .header h1 {
          font-size: 24px;
        }
        .body {
          padding: 20px 15px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Welcome to ChatApp! 🎉</h1>
      </div>
      <img
        class="hero"
        src="https://media.istockphoto.com/id/1495736381/photo/speech-bubble.jpg?s=612x612&w=is&k=20&c=pfRldNQJeFIRoP-ABBwgG4hrXdc7iVTuwUJ7LdaZZTk="
        alt="ChatApp Hero Image"
      />
      <div class="body">
        <p>Hi <strong>${userName}</strong>,</p>
        <p>
          We’re so excited to have you on board! ChatApp is your go-to app for
          instant messaging, creating groups, and staying connected with
          friends.
        </p>
        <p>Click the button below to log in and start chatting right away:</p>
        <a href="${ENV.CLIENT_URL}/login" class="button">Get Started</a>
        <p>
          If you have any questions or feedback, simply reply to this email —
          we’re here to help!
        </p>
        <p>Cheers,<br />The ChatApp Team</p>
      </div>
    </div>
    <div class="footer">&copy; 2026 ChatApp. All rights reserved.</div>
  </body>
</html>`;
}
