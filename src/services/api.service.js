import axios from "axios";

export const publishSns = async (subject, message) => {
  const config = {
    headers: {
      "Referrer-Policy": "origin-when-cross-origin",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    },
  };

  const body = { subject: subject, message: message };
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

  const apiURL = "https://tehaandev-github-io-backend.vercel.app/sns";
  await axios.post(apiURL, body, config);
};
