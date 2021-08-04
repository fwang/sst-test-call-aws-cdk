import { SSM } from "aws-sdk";
import MyStack from "./MyStack";

export default async function main(app) {
  // Fetch values from SSM
  const client = new SSM();
  const param = await client.getParameter({
    Name: "/stripeSecretKey/test",
    WithDecryption: true,
  }).promise();
  console.log(param.Parameter.Value);

  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs12.x",
    environment: {
      STRIPE_SECRET: param.Parameter.Value,
    },
  });

  new MyStack(app, "my-stack");

  // Add more stacks
}
