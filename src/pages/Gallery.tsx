import React, { useState } from "react";
import { galleryItems } from "../data/gallery";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative">
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-6">
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 rounded-full bg-white/90 px-3 py-2 text-slate-900 shadow-md hover:bg-white"
          >
            Close
          </button>
          <img
            src={selectedImage}
            alt="Zoomed gallery"
            className="max-h-[90vh] max-w-full rounded-3xl shadow-2xl object-contain"
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 font-semibold">Decoration ideas</p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900">Products in lifestyle settings</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">Browse real-life scenes where our products are styled in rooms, gardens, and cozy home spaces.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setSelectedImage(item.image)}
                className="group block w-full overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </button>
              <div className="p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">{item.category}</div>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h2>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
