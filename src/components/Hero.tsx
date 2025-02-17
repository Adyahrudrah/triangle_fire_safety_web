import { FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-orange-500 to-yellow-600 py-20">
      <div className="container mx-auto text-center  portrait:text-xs">
        <h1 className="text-4xl font-bold  portrait:text-sm">
          TRIANGLE
          <span className="bg-gray-900 mx-2 px-2 rounded-sm">
            <span className="text-red-500">FIRE</span>
            <i className="text-gray-300">&</i>
            <span className="text-green-500">SAFETY</span>
          </span>
          ENGINEERING SYSTEMS
        </h1>
        <p className="mt-4">(FIRE PREVENTION IS OUR INTENTION)</p>
        <span className="flex justify-center gap-2">
          <FaMapMarkerAlt />
          No:201,Suryanagar,Kotturpuram,Chennai-600085
        </span>
      </div>
    </div>
  );
};

export default Hero;
