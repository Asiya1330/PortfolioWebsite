import Button from "../Generals/Button";
import FormInput from "../Generals/FormInput";
import { emailSending } from "../../utills/Email-Sending/email-sending";
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

const ContactForm = () => {
  const [emailSuccessPopup, setEmailSuccessPopup] = useState(false);
  const [failedPopup, setFailedPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState(false);

  useEffect(() => {
    if (failedPopup) {
      setTimeout(() => {
        setFailedPopup(false);
      }, 5000);
    }
    if (emailSuccessPopup) {
      setTimeout(() => {
        setEmailSuccessPopup(false);
      }, 5000);
    }
  }, [failedPopup, emailSuccessPopup]);

  const SubmitFormHandler = async (e) => {
    e.preventDefault();
    if (messageError) return;
    setLoading(true);
    try {
      const message = e.target.message.value;
      const from_name = e.target.name.value;
      const to_name = process.env.REACT_APP_EMAIL_TO_NAME || "Sababa Usmani";
      const from_email = e.target.email.value;
      const subject = e.target.subject.value;
      const templateParams = {
        message,
        from_name,
        to_name,
        from_email,
        subject,
      };
      const { status } = await emailSending(templateParams);
      setLoading(false);
      e.target.reset();
      status === 200 ? setEmailSuccessPopup(true) : setFailedPopup(true);
    } catch (err) {}
  };
  return (
    <div className="w-full md:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={SubmitFormHandler}
          className="h-full lg:h-[max-content] p-6 sm:p-10 mr-0 mt-[0px] mb-[1rem] ml-4 lg:mt-4 lg:mr-0 lg:mb-4 lg:ml-4 bg-[#2c2c37]  shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-light text-xl mb-8">
            Contact Form
          </p>
          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Full Name"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
          />

          <div className="mt-6">
            {messageError && (
              <div className="text-[#f85d5d] text-[10px]">
                Message length must be greater than 5!
              </div>
            )}
            <label
              className="block text-sm text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              onChange={(e) => {
                e.target.value.length < 5
                  ? setMessageError(true)
                  : setMessageError(false);
              }}
              className="w-full py-2 focus:outline-none border-b border-gray-200 border-opacity-50 text-secondary-light bg-[#2c2c37] shadow-sm text-sm"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
            ></textarea>
          </div>

          <div className="font-general-medium ">
            <Button title="Send Message" type="submit" loading={loading} />
          </div>
          {emailSuccessPopup && (
            <Slide direction="right">
              <div className="text-[#75ff7a] bg-[#75ff7a24] border-[#75ff7a] mt-2 border-1 p-2 my-2">
                Email Sent Successfully!
              </div>
            </Slide>
          )}
          {failedPopup && (
            <Slide direction="right">
              <div className="text-[#ff8787]  bg-[#ffacac33] border-[#ff8787] mt-2 border-1 p-2 my-2">
                Error while Sending Email!
              </div>
            </Slide>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
