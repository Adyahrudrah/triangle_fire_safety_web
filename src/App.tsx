import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Clients from "./components/ClientList";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

import image_1 from "./assets/Works/Image (1).jpeg";
import image_2 from "./assets/Works/Image (2).jpeg";
import image_3 from "./assets/Works/Image (3).jpeg";
import image_4 from "./assets/Works/Image (4).jpeg";
import image_5 from "./assets/Works/Image (5).jpeg";
import image_6 from "./assets/Works/Image (6).jpeg";
import image_7 from "./assets/Works/Image (7).jpeg";
import image_8 from "./assets/Works/Image (8).jpeg";
import image_9 from "./assets/Works/Image (9).jpeg";
import image_10 from "./assets/Works/Image (10).jpeg";
import image_11 from "./assets/Works/Image (11).jpeg";
import image_12 from "./assets/Works/Image (12).jpeg";
import image_13 from "./assets/Works/Image (13).jpeg";
import image_14 from "./assets/Works/Image (14).jpeg";
import image_15 from "./assets/Works/Image (15).jpeg";
import image_16 from "./assets/Works/Image (16).jpeg";
import image_17 from "./assets/Works/Image (17).jpeg";
import image_18 from "./assets/Works/Image (18).jpeg";
import image_19 from "./assets/Works/Image (19).jpeg";
import image_20 from "./assets/Works/Image (20).jpeg";
import image_21 from "./assets/Works/Image (21).jpeg";
import image_22 from "./assets/Works/Image (22).jpeg";
import image_23 from "./assets/Works/Image (23).jpeg";
import image_24 from "./assets/Works/Image (24).jpeg";

const App = () => {
  const images = [
    { id: 1, url: image_1, alt: "Image 1" },
    { id: 2, url: image_2, alt: "Image 2" },
    { id: 3, url: image_3, alt: "Image 3" },
    { id: 4, url: image_4, alt: "Image 4" },
    { id: 5, url: image_5, alt: "Image 5" },
    { id: 6, url: image_6, alt: "Image 6" },
    { id: 7, url: image_7, alt: "Image 7" },
    { id: 8, url: image_8, alt: "Image 8" },
    { id: 9, url: image_9, alt: "Image 9" },
    { id: 10, url: image_10, alt: "Image 10" },
    { id: 11, url: image_11, alt: "Image 11" },
    { id: 12, url: image_12, alt: "Image 12" },
    { id: 13, url: image_13, alt: "Image 13" },
    { id: 14, url: image_14, alt: "Image 14" },
    { id: 15, url: image_15, alt: "Image 15" },
    { id: 16, url: image_16, alt: "Image 16" },
    { id: 17, url: image_17, alt: "Image 17" },
    { id: 18, url: image_18, alt: "Image 18" },
    { id: 19, url: image_19, alt: "Image 19" },
    { id: 20, url: image_20, alt: "Image 20" },
    { id: 21, url: image_21, alt: "Image 21" },
    { id: 22, url: image_22, alt: "Image 22" },
    { id: 23, url: image_23, alt: "Image 23" },
    { id: 24, url: image_24, alt: "Image 24" },
  ];
  return (
    <div>
      <div className="max-h-screen overflow-scroll snap-y snap-mandatory snap-always">
        <Navbar />
        <Hero />
        <AboutUs />
        <Services />
        <Clients />
        <Gallery images={images} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
