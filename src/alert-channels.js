const { URL } = require("node:url");

const { EmailAlertChannel } = require("checkly/constructs");

const sendDefaults = {
  sendFailure: true,
  sendRecovery: false,
  sendDegraded: false,
  sslExpiry: false,
  sslExpiryThreshold: 30,
};

const emailChannel = new EmailAlertChannel("email-channel-1", {
  address: "alerts@acme.com",
  ...sendDefaults,
});

module.exports = {
  emailChannel,
};
