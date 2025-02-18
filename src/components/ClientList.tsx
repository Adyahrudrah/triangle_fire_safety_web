// Import all client logos
import blueStar from "../assets/blueStar.png";
import haldiRams from "../assets/haldiRams.png";
import pvrInox from "../assets/pvrInox.png";
import sieMens from "../assets/sieMens.png";
import velVenkat from "../assets/velVenkat.png";
import hP from "../assets/hP.png";
import radiAnce from "../assets/radiAnce.png";
import keC from "../assets/keC.png";
import adRoit from "../assets/adRoit.png";

// Array of client data
const clients = [
  { id: 9, logo: adRoit, alt: "Adroit Logo" },
  { id: 1, logo: blueStar, alt: "Blue Star Logo" },
  { id: 2, logo: haldiRams, alt: "Haldiram's Logo" },
  { id: 3, logo: pvrInox, alt: "PVR INOX Logo" },
  { id: 4, logo: sieMens, alt: "Siemens Logo" },
  { id: 5, logo: velVenkat, alt: "Vel Venkat Logo" },
  { id: 6, logo: hP, alt: "HP Logo" },
  { id: 8, logo: keC, alt: "KEC Logo" },
  { id: 7, logo: radiAnce, alt: "RadiAnce Logo" },
];

// CSS classes for the images
const imageClasses =
  "drop-shadow-lg bg-gray-400 min-w-[100px] max-h-[100px] rounded-md shadow-lg";

const Clients = () => {
  return (
    <div className="marquee-container bg-gray-600">
      <div className="marquee-content py-1">
        {clients.map((client) => (
          <div key={client.id}>
            <img
              src={client.logo}
              alt={client.alt}
              className={imageClasses}
              loading="lazy" // Lazy load images for better performance
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
