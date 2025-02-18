import { FaPhone, FaEnvelope, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between container gap-5 portrait:flex-col">
        <div className="flex items-center justify-center">
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <img src={logo} alt="logo" />
          </div>
          <h2 className="text-3xl font-bold text-gray-400">
            TRIANGLE <span className="text-red-500">FIRE</span>&
            <span className="text-green-500">SAFETY</span>
            <br></br> ENGINEERING SYSTEMS
          </h2>
        </div>
        <div className="flex flex-col items-start space-x-4 text-gray-400">
          <div className="flex items-center space-x-2">
            <FaUser />
            <span>PREMKUMAR S</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone />
            <span>
              <a href="tel:+918778394891">[ 877-839-4891 ]</a>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>
              <a href="mailto:triangleengineers.3@gmail.com">
                triangleengineers.3@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
