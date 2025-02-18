// Import all service images
import fireExtImg from "../assets/extinguiser.png";
import fireHydrantImg from "../assets/fireHydrant.png";
import fireAlarmImg from "../assets/fireAlarmImg.png";
import fireSuppressionImg from "../assets/fireSuppressionImg.png";
import accImg from "../assets/accImg.png";
import fireBranchPipe from "../assets/fireBranchPipe.png";
import fireRrlHose from "../assets/fireRrlHose.png";
import fireHoseBox from "../assets/fireHoseBox.png";
import fireSprinkler from "../assets/fireSprinkler.png";
import ccTV from "../assets/ccTV.png";
import fireMockDrill from "../assets/fireMockDrill.png";
import safetySuits from "../assets/safetySuits.png";
import safefyBoards from "../assets/safefyBoards.png";

// Array of service data
const services = [
  {
    id: 1,
    title:
      "Supply, Installation, Refilling & Maintenance of Fire Extinguishers",
    image: fireExtImg,
    alt: "Fire Extinguisher",
  },
  {
    id: 2,
    title:
      "Maintenance of Fire Hydrant system, Fire sprinkler & Water spray system",
    image: fireHydrantImg,
    alt: "Fire Hydrant",
  },
  {
    id: 3,
    title: "Design, Supply, Installation & Maintenance of Fire Alarm System",
    image: fireAlarmImg,
    alt: "Fire Alarm System",
  },
  {
    id: 4,
    title:
      "Design, Supply, Installation & Maintenance of Fire Suppression System",
    image: fireSuppressionImg,
    alt: "Fire Suppression System",
  },
  {
    id: 5,
    title: "Design, Supply, Installation & Maintenance of Sprinkler System",
    image: fireSprinkler,
    alt: "Fire Sprinkler System",
  },
  {
    id: 6,
    title: "Supply of Accessories for all above Fire Protection System",
    image: [fireHoseBox, fireRrlHose, accImg, fireBranchPipe, safefyBoards], // Array of images for this service
    alt: "Fire Protection Accessories",
  },
  {
    id: 7,
    title: "CCTV Camera Installation, Maintenance & Service",
    image: ccTV,
    alt: "CCTV Camera",
  },
  {
    id: 8,
    title: "Fire Mock Drill Training & Certification",
    image: fireMockDrill,
    alt: "Fire Mock Drill",
  },
  {
    id: 9,
    title: "Supply of Safety Suits & Safety Equipment",
    image: safetySuits,
    alt: "Safety Suits & Equipment",
  },
];

const Services = () => {
  return (
    <div className="bg-orange-600 py-16 p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white">
          Our Services
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-1">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-yellow-500 p-6 rounded-lg shadow-lg text-gray-900 relative h-[400px]"
            >
              <div className="h-[80%] flex justify-center">
                <h3 className="text-gray-300 text-4xl font-bold absolute -top-5 bg-gray-800 px-20 py-5 rounded-full">
                  {service.id}
                </h3>
                {Array.isArray(service.image) ? (
                  <div className="flex overflow-x-scroll overflow-y-hidden gap-2">
                    {service.image.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${service.alt} ${index + 1}`}
                        className="drop-shadow-lg h-[60%]"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="drop-shadow-lg h-[90%]"
                  />
                )}
              </div>
              <p className="mt-4 text-center">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
