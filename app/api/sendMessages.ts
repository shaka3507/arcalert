import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

export default async function handler(req, res) {
  // Ensure it only runs for POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Destructuring request body to get message details
  const { messages } = req.body; // { messages: [{ to: '+1234567890', body: 'Hello!' }, ...] }

  // Check if messages are provided
  if (!messages || messages.length === 0) {
    return res.status(400).json({ error: 'No messages provided.' });
  }

  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

  try {
    // Array to hold the send message promises
    const messagePromises = messages.map(({ to, body }) =>
      client.messages.create({
        body,
        from: twilioPhoneNumber,
        to,
      })
    );

    // Wait for all messages to be sent
    const messageResponses = await Promise.all(messagePromises);

    // Respond with the Twilio message responses
    res.status(200).json({ success: true, data: messageResponses });
  } catch (error) {
    console.error('Error sending messages:', error);
    res.status(500).json({ error: 'Failed to send messages' });
  }
}