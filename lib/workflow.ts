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
  console.log("Function sendEmail executed");
  console.log("Sending email to:", email);

  return "Test response"; // Sementara return dummy response
};
