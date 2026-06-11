import { type ReactElement } from "react";
import { Link } from "react-router-dom";

export const CTASection = (): ReactElement => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[32px] bg-gradient-to-r from-slate-950 to-slate-800 px-8 py-16 text-center sm:py-24 sm:px-12">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to transform your space?
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Discover our curated collection of sustainable designs and modern craftsmanship.
        </p>
        <div className="mt-8">
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
};
