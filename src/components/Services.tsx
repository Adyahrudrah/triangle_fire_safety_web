import fireExtImg from "../assets/extinguiser.png";
import fireHydrantImg from "../assets/fireHydrant.png";
import fireAlarmImg from "../assets/fireAlarmImg.png";
import fireSuppressionImg from "../assets/fireSuppressionImg.png";
import fm200Img from "../assets/fm200Img.png";
import accImg from "../assets/accImg.png";
const Services = () => {
  return (
    <div className="bg-orange-600 py-16 p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="bg-yellow-500 p-6 rounded-lg shadow-lg text-gray-900 relative">
            <div className="h-[80%] flex justify-center">
              <h1 className="text-gray-300 text-4xl font-bold absolute -top-5 bg-gray-800 px-20 py-5 rounded-full">
                1
              </h1>
              <img src={fireExtImg} alt="" className="drop-shadow-lg h-[90%]" />
            </div>
            <p>
              Supply, Installation, Refilling & Maintenance of Fire
              Extinguishers{" "}
            </p>
          </div>
          <div className="bg-yellow-500 p-6 rounded-lg shadow-lg text-gray-900 relative">
            <div className="h-[80%] flex justify-center">
              <h3 className="text-gray-300 text-4xl font-bold absolute -top-5 bg-gray-800 px-20 py-5 rounded-full">
                2
              </h3>
              <img
                src={fireHydrantImg}
                alt=""
                className="drop-shadow-lg h-[90%]"
              />
            </div>
            <p>
              Maintenance of Fire Hydrant system, Fire sprinkler & Water spray
              system{" "}
            </p>
          </div>
          <div className="bg-yellow-500 p-6 rounded-lg shadow-lg text-gray-900 relative">
            <div className="h-[80%] flex justify-center">
              <h3 className="text-gray-300 text-4xl font-bold absolute -top-5 bg-gray-800 px-20 py-5 rounded-full">
                3
              </h3>
              <img
                src={fireAlarmImg}
                alt=""
                className="drop-shadow-lg h-[90%]"
              />
            </div>
            <p>
              Design, Supply, Installation & Maintenance of Fire Alarm System
            </p>
          </div>
          <div className="bg-yellow-500 p-6 rounded-lg shadow-lg text-gray-900 relative">
            <div className="h-[80%] flex justify-center">
              <h3 className="text-gray-300 text-4xl font-bold absolute -top-5 bg-gray-800 px-20 py-5 rounded-full">
                4
              </h3>
              <img
                src={fireSuppressionImg}
                alt=""
                className="drop-shadow-lg h-[90%]"
              />
            </div>
            <p>
              Design, Supply, Installation & Maintenance of Fire Suppression
              System
            </p>
          </div>
          <div className="bg-yellow-500 p-6 rounded-lg shadow-lg text-gray-900 relative">
            <div className="h-[80%] flex justify-center">
              <h3 className="text-gray-300 text-4xl font-bold absolute -top-5 bg-gray-800 px-20 py-5 rounded-full">
                5
              </h3>
              <img src={fm200Img} alt="" className="drop-shadow-lg h-[90%]" />
            </div>
            <p>
              Design, Supply, Installation & Maintenance of FM 200 & Co2
              Flooding System
            </p>
          </div>
          <div className="bg-yellow-500 p-6 rounded-lg shadow-lg text-gray-900 relative">
            <div className="h-[80%] flex justify-center">
              <h3 className="text-gray-300 text-4xl font-bold absolute -top-5 bg-gray-800 px-20 py-5 rounded-full">
                6
              </h3>
              <img src={accImg} alt="" className="drop-shadow-lg h-[90%]" />
            </div>
            <p>Supply of Accessories for all above Fire Protection System</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
