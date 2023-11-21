import { Infobip, AuthType } from "@infobip-api/sdk";

const BASE_URL = "";
const API_KEY = "";
const TO_NUMBER = "";
const FROM_NUMBER = "ACMECO";
const NOTIFY_URL = "";

const smsfixture = {
  messages: [
    {
      callbackData: "DLR callback data",
      destinations: [
        {
          messageId: "MESSAGE-ID-123-xyz",
          to: TO_NUMBER,
        },
      ],
      from: FROM_NUMBER,
      text: "This is a test message. Get your burritos at a discount right now BRTO20OFF",
      notifyUrl: NOTIFY_URL,
      notifyContentType: "application/json",
    },
    {
      deliveryTimeWindow: {
        days: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"],
        from: {
          hour: 9,
          minute: 0,
        },
        to: {
          hour: 19,
          minute: 59,
        },
      },
      destinations: [
        {
          to: TO_NUMBER,
        },
      ],
      from: FROM_NUMBER,
      sendAt: new Date().toUTCString(),
      text: "This is a test message with a delivery time window (Mon-Fri 9am to 8pm).",
      notifyUrl: NOTIFY_URL,
      notifyContentType: "application/json",
    },
  ],
  sendingSpeedLimit: {
    amount: 12,
  },
  tracking: {
    track: "SMS",
    type: "SMSINT",
  },
};

let infobip = new Infobip({
  baseUrl: BASE_URL,
  apiKey: API_KEY,
  authType: AuthType.ApiKey,
});

const response = await infobip.channels.sms.send(smsfixture);
console.log({ response: response.data });
