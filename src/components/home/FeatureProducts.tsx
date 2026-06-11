import { type ReactElement } from "react";
import { Link } from "react-router-dom";
import { featuredProducts } from "../../data/product";

export const FeatureProducts = (): ReactElement => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Featured Products</h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
          Discover our handpicked selection of premium products that combine functionality with modern design.
        </p>
      </div>

      <div className="mt-12 grid auto-rows-max grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProducts.map((product, index) => (
          <Link
            key={product.id}
            to={`/products/${product.slug}`}
            className={`group relative overflow-hidden rounded-[24px] bg-white shadow-sm shadow-slate-900/5 transition hover:shadow-lg hover:shadow-slate-900/10 ${
              index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
            }`}
          >
            <div className={`relative overflow-hidden bg-slate-100 ${index === 0 ? "h-96 sm:h-full" : "h-64"}`}>
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-950/0 transition group-hover:bg-slate-950/10" />
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-6 text-white">
              <h3 className="text-lg font-semibold leading-tight">{product.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-slate-200">{product.description}</p>
              <div className="mt-4 flex items-end justify-between">
                <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
                <span className="inline-block text-xs uppercase tracking-wider text-slate-300">View</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
