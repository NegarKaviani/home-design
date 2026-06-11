import React, { useState } from "react";

type Props = {
  images: string[];
  maxImages?: number;
};

const ProductGallery: React.FC<Props> = ({ images, maxImages = 5 }) => {
  const shown = images.slice(0, maxImages);
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="w-full h-80 bg-gray-100 rounded-md overflow-hidden">
        <img
          src={shown[index]}
          alt={`Product image ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {shown.length > 1 && (
        <div className="mt-3 flex gap-2">
          {shown.map((src, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-16 h-16 rounded-md overflow-hidden border ${i === index ? "ring-2 ring-emerald-500" : "border-slate-200"}`}
              aria-label={`Show image ${i + 1}`}
            >
              <img src={src} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
