import React, { useState } from "react";

// Define the type for the image object
type Image = {
  id: number;
  url: string;
  alt: string;
};

// Define the props for the Gallery component
type GalleryProps = {
  images: Image[];
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-1 p-1 bg-gray-600">
      {images.map((image) => (
        <div
          key={image.id}
          className={`relative overflow-hidden shadow-lg transition-all duration-300 ${
            hoveredId === image.id
              ? "absolute scale-115 w-full h-full z-10 drop-shadow-xl rounded-sm"
              : "brightness-55"
          }`}
          onMouseEnter={() => setHoveredId(image.id)}
          onMouseLeave={() => setHoveredId(null)}
          style={{
            // Ensure the hovered element doesn't cause layout shifts
            transformOrigin: "center center",
          }}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover transform transition-transform duration-300"
          />
          <p className="text-white text-lg font-semibold">{image.alt}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
