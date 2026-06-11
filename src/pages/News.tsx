import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { newsItems } from "../data/news";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const News: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-600 font-semibold">News</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Latest stories from Ceramic.</h1>
        <p className="mt-4 max-w-3xl text-slate-600 leading-8">
          Stay updated on new collection launches, studio news, styling tips, and community events.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {newsItems.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
          >
            <div className="group overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-4 text-slate-600 leading-7">{item.excerpt}</p>
              <div className="mt-6">
                <Link to={`/news/${item.slug}`} className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                  Read more
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default News;
