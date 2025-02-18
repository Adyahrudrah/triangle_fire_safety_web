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
    <div className="flex flex-wrap bg-gray-600 overflow-x-clip snap-start">
      <h1 className="flex w-full bg-yellow-500 justify-center text-3xl text-white">
        Works
      </h1>
      {images.map((image) => (
        <div
          key={image.id}
          className={`relative shrink-0 grow-1 shadow-lg transition-all max-w-xl  h-[200px] duration-600 ${
            hoveredId === image.id
              ? "absolute scale-150 z-10 drop-shadow-xl"
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
            className="w-full h-full object-cover hover:rounded-2xl transform transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
