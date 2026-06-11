import React from "react";
import type { Product } from "../../types/product";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
};

const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
