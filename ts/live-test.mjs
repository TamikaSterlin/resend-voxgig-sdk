import sdk from "./dist/ResendSDK.js";
const { ResendSDK } = sdk;

if (!process.env.RESEND_APIKEY) {
  throw new Error("Set RESEND_APIKEY before running this test.");
}

const client = new ResendSDK({
  apikey: process.env.RESEND_APIKEY,
});

try {
  const domains = await client.Domain().list();
  console.log("Domain list request completed:");
  console.log(domains);
} catch (error) {
  console.error("Request failed:", error.message);
  process.exitCode = 1;
}
