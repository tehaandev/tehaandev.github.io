import axios from "axios";

export const publishSns = async (subject, message) => {
  const body = { subject: subject, message: message };
  const apiURL = "https://portfolio-backend-indol-mu.vercel.app/sns";
  // const apiURL = "http://localhost:3000/sns";

  return await axios
    .post(apiURL, body)
    .then(function (response) {
      return response.status;
    })
    .catch(function (err) {
      return err.response.status;
    });
};
