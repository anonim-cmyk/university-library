import { Client as WorkflowClient } from "@upstash/workflow";
import { Client as QStashClient, resend } from "@upstash/qstash";
import config from "./config";

export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qtashUrl,
  token: config.env.upstash.qtashToken,
});

const qtashClient = new QStashClient({
  token: config.env.upstash.qtashToken,
});

export const sendEmail = async ({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    console.log("Sending email to:", email); // Cek email tujuan

    const response = await qtashClient.publishJSON({
      api: {
        name: "email",
        provider: resend({ token: config.env.resend }),
      },
      body: {
        from: "Acme <onboarding@resend.dev>",
        to: [email],
        subject: subject,
        html: `<p>${message}</p>`,
      },
    });

    console.log("Resend response:", response); // Cek response dari API Resend
    return response;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email");
  }
};
