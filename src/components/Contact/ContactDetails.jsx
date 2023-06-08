import ContactSvg from "../../Assets/undraw-contact.svg";

const ContactDetails = () => {
  return (
    <div
      className="w-full md:w-1/2 flex items-center justify-center "
      id="contact"
    >
      <img className="pl-4" src={ContactSvg} alt="" />
    </div>
  );
};

export default ContactDetails;
