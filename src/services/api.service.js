import axios from "axios";

export const publishSns = async (subject, message) => {
  const body = { subject: subject, message: message };
  const apiURL = "https://tehaandev-github-io-backend.vercel.app/sns";
  // const apiURL = "http://localhost:3000/sns";
  try {
    await axios.post(apiURL, body);
    return 201;
  } catch (err) {
    console.error(err);
    return 400;
  }
};
