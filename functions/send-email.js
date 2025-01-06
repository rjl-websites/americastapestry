require("dotenv").config();
const mailgun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
  url: process.env.MAILGUN_URL,
});

// Log the apiKey for debugging
console.log("Mailgun API Key:", process.env.MAILGUN_API_KEY);
console.log("Mailgun Domain:", process.env.MAILGUN_DOMAIN);
console.log("Mailgun Url:", process.env.MAILGUN_URL);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = JSON.parse(event.body);
  if (!data.message || !data.contactName || !data.contactEmail) {
    return { statusCode: 422, body: "Name, email, and message are required." };
  }

  const mailgunData = {
    from: process.env.FROM_EMAIL_ADDRESS,
    to: process.env.CONTACT_TO_EMAIL_ADDRESS,
    "h:Reply-To": data.contactEmail,
    subject: `New contact from ${data.contactName}`,
    text: `Name: ${data.contactName}\nEmail: ${data.contactEmail}\nMessage: ${data.message}`,
  };

  try {
    await mailgun.messages().send(mailgunData);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Your message was sent successfully! We'll be in touch.",
      }),
    };
  } catch (error) {
    return {
      statusCode: 422,
      body: JSON.stringify({ error: `Error: ${error.message}` }),
    };
  }
};
