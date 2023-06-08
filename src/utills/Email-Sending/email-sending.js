import emailjs from "@emailjs/browser";
const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAIL_USER_ID;

export const emailSending = async (templateParams) => {
  try {
    const data = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    );
    console.log("SUCCESS!", data.status, data.text);
    return { status: data.status };
  } catch (err) {
    console.log("FAILED...", err);
    return { status: 400 };
  }
};
