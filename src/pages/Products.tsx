import React, { useMemo, useState } from "react";
import ProductFilter from "../components/products/ProductFilter";
import ProductGrid from "../components/products/ProductGrid";
import { products } from "../data/product";

type ProductFilters = {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
};

const Products: React.FC = () => {
  const [filters, setFilters] = useState<ProductFilters>({});

  const categories = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))),
    []
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (filters.category && product.category !== filters.category) {
        return false;
      }
      if (filters.minPrice !== undefined && product.price < filters.minPrice) {
        return false;
      }
      if (filters.maxPrice !== undefined && product.price > filters.maxPrice) {
        return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-8">
        <div className="sticky top-6 self-start">
          <ProductFilter categories={categories} onChange={setFilters} />
        </div>

        <div>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">All products</h1>
              <p className="text-slate-600">Browse our collection and filter by category or price.</p>
            </div>
            <div className="text-sm text-slate-600">{filteredProducts.length} product{filteredProducts.length === 1 ? "" : "s"} found</div>
          </div>

          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Products;
