import React, { useState, useEffect } from "react";

type Filters = {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
};

type Props = {
  categories: string[];
  onChange?: (filters: Filters) => void;
};

const ProductFilter: React.FC<Props> = ({ categories, onChange }) => {
  const [category, setCategory] = useState<string>("all");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  useEffect(() => {
    const filters: Filters = {};
    if (category && category !== "all") filters.category = category;
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);
    if (!Number.isNaN(min)) filters.minPrice = min;
    if (!Number.isNaN(max)) filters.maxPrice = max;
    onChange?.(filters);
  }, [category, minPrice, maxPrice, onChange]);

  const clear = () => {
    setCategory("all");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <form className="bg-white rounded-md p-4 shadow-sm">
      <div className="grid grid-cols-1 gap-4 items-end">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full rounded-md border-0 bg-slate-100 py-2 px-3 text-slate-800"
          >
            <option value="all">All categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Min price</label>
          <input
            type="number"
            min={0}
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="0"
            className="block w-full rounded-md border-0 bg-slate-100 py-2 px-3 text-slate-800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Max price</label>
          <input
            type="number"
            min={0}
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Any"
            className="block w-full rounded-md border-0 bg-slate-100 py-2 px-3 text-slate-800"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={clear}
          className="px-3 py-2 bg-slate-100 text-slate-800 rounded-md"
        >
          Clear
        </button>
        <div className="text-sm text-slate-600">Filters auto-apply</div>
      </div>
    </form>
  );
};

export default ProductFilter;
