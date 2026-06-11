import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/product";
import ProductGallery from "../components/products/ProductGallery";

const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="max-w-7xl mx-auto p-8">Product not found.</div>;
  }

  const images = product.images && product.images.length ? product.images : [product.image];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProductGallery images={images} />

        <div>
          <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
          <div className="text-slate-600 mb-4">{product.category}</div>
          <div className="text-emerald-600 font-bold text-xl mb-4">${product.price.toFixed(2)}</div>
          <p className="text-slate-700 mb-6">{product.description}</p>

          <div className="mb-6 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <table className="min-w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="px-4 py-3 bg-slate-200">Features</th>
                </tr>
              </thead>
              <tbody>
                {product.features.map((feature) => (
                  <tr key={feature} className="border-t border-slate-200">
                    <td className="px-4 py-3">{feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex gap-3">
            <a href="/contact" className="px-4 py-2 border-2 border-emerald-500 rounded-md hover:bg-emerald-500 bg-white text-emerald-600 hover:text-white transition-colors ">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
