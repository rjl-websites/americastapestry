const fetch = require("node-fetch");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { firstName, lastName, email } = JSON.parse(event.body);
  const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
  const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
  const MAILGUN_LIST = process.env.MAILGUN_LIST;

  const data = {
    subscribed: true,
    address: email,
    name: `${firstName} ${lastName}`,
    vars: JSON.stringify({ firstName, lastName }),
  };

  try {
    const response = await fetch(
      `https://api.mailgun.net/v3/lists/${MAILGUN_LIST}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(
            `api:${MAILGUN_API_KEY}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data),
      }
    );

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Successfully subscribed to the mailing list!",
        }),
      };
    } else {
      const errorData = await response.json();
      return {
        statusCode: response.status,
        body: JSON.stringify({ message: `Error: ${errorData.message}` }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};
