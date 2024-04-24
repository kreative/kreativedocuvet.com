import { NextApiRequest, NextApiResponse } from "next";
import Airtable from 'airtable';

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_TOKEN,
});

const base = Airtable.base('appPdOQRgbUJBy46k');

interface ErrorReportRequest extends NextApiRequest {
  body: {
    level: string;
    feedback: string;
    ksn: number;
    email: string;
    referringPage?: string;
    errorMessage?: string;
  };
}

export default function handler(req: ErrorReportRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  base('Reports').create({
    "Level": req.body.level,
    "Feedback": req.body.feedback,
    "KSN": req.body.ksn,
    "Email": req.body.email,
    "Referring Page": req.body.referringPage,
    "Error Message": req.body.errorMessage,
  }, { typecast: true }, function (err, record) {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
    else {
      console.log(record)
      return res.status(200).json({ success: true });
    }
  });
}