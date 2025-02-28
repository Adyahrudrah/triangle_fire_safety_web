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
    <div className="flex flex-wrap bg-orange-600 overflow-x-clip snap-start">
      <h1 className="p-4 mx-auto flex w-[90%] my-10 rounded-2xl bg-yellow-500 justify-center text-3xl text-white">
        Our Works
      </h1>
      <div className="flex flex-wrap bg-orange-600 overflow-x-clip">
        {images.map((image) => (
          <div
            key={image.id}
            className={`relative block rounded-2xl m-2 shrink-0 grow-1 shadow-2xl transition-all max-w-[95dvw]  h-[200px] duration-600 ${
              hoveredId === image.id
                ? "absolute z-10 drop-shadow-2xl"
                : "brightness-100"
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
              className="rounded-2xl w-full h-full object-cover transform transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
