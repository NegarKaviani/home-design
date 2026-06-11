import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { newsItems } from "../data/news";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const NewsDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const news = newsItems.find((item) => item.slug === slug);

  if (!news) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-slate-700">News item not found.</p>
        <Link to="/news" className="mt-6 inline-block text-emerald-600 hover:text-emerald-800">
          Back to news
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-600 font-semibold">News article</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">{news.title}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span>{news.category}</span>
          <span>{news.date}</span>
        </div>
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-sm"
      >
        <img src={news.image} alt={news.title} className="h-96 w-full object-cover" />
        <div className="p-10">
          <p className="text-slate-700 text-lg leading-8">{news.excerpt}</p>
          <div className="mt-8 space-y-6 text-slate-600 leading-8">
            <p>
              At Ceramic, we tell stories through spaces. This feature explores how the latest studio updates, collaborations, and design research are shaping interiors that feel grounded, elegant, and easy to live with.
            </p>
            <p>
              Our team is constantly developing new ways to bring warmth and texture into every room. Whether it’s a statement planter, a layered textile, or a small accent piece, each item is selected to support everyday living with quiet beauty.
            </p>
            <p>
              Keep an eye on this space for more updates, curated styling tips, and the latest product launches from our studio.
            </p>
          </div>
        </div>
      </motion.section>

      <div className="mt-10">
        <Link to="/news" className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-800">
          ← Back to news
        </Link>
      </div>
    </div>
  );
};

export default NewsDetail;
