import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 p-4">
      <div className="grid grid-cols-1">
        <p className="text-center">
          All ISI Marked Fire Fighting Equipments Installation & Services
          Contact Us
        </p>
        <div className="flex justify-center items-center gap-2">
          <FaPhone /> 877-839-4891
        </div>
      </div>
    </footer>
  );
};

export default Footer;
