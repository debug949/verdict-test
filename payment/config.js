// Payment integration config
// TODO: move credentials to environment variables

const awsConfig = {
  accessKeyId: "AKIAIOSFODNN7EXAMPLE",
  secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  region: "us-east-1",
};

const paymentGateway = {
  api_secret: "live_paymentSecretKey_abcdef12345",
  webhookSecret: process.env.PAYMENT_WEBHOOK_SECRET,
};

module.exports = { awsConfig, paymentGateway };
