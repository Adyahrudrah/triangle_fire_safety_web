import { FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-orange-500 to-yellow-600 py-20 snap-start">
      <div className="container mx-auto text-center">
        <div className="flex flex-col">
          <div className="text-4xl font-bold">
            <h1 className="inline-block">TRIANGLE</h1>
            <div className="bg-gray-900 mx-2 p-2 rounded-sm inline-block">
              <div className="text-red-500 inline-block">
                <h1 className="inline-block">FIRE</h1>
              </div>
              <i className="text-gray-300 inline-block">&</i>
              <div className="text-green-500 inline-block">
                <h1 className="inline-block">SAFETY</h1>
              </div>
            </div>
            <h1 className="inline-block">ENGINEERING SYSTEMS</h1>
          </div>
        </div>

        <p className="mt-4">( FIRE PREVENTION IS OUR INTENTION )</p>
        <span className="flex justify-center gap-2">
          <FaMapMarkerAlt />
          No:201, Surya Nagar, Kotturpuram, Chennai, Tamil Nadu 600025
        </span>
      </div>
    </div>
  );
};

export default Hero;
