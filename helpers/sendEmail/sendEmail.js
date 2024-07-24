const sgMail = require('@sendgrid/mail');
require('dotenv').config(); // Ensure you have this line to load environment variables

// Set your SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Function to send email
const sendEmail = async (subject, text) => {
  console.log(process.env.EMAIL_USERNAME, "emaill");
  console.log(process.env.SENDGRID_API_KEY, "SendGrid API Key");

  const msg = {
    to: 'ashfaqnabi357@gmail.com', // Recipient email address
    from: process.env.EMAIL_USERNAME, // Your verified sender email address
    subject: subject,
    text: text,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',

  };

  try {
    const response = await sgMail.send(msg);
    console.log('Email sent:', response);
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw new Error('Email sending failed');
  }
};

module.exports = sendEmail;
