import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const cardDelay = (index: number) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.15 * index, duration: 0.6 } },
});

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-600 font-semibold">About Ceramic</p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl"
        >
          Crafted interiors for modern living.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-3xl text-slate-600 leading-8"
        >
          Ceramic is a home decor studio built for people who love calm, tactile design. We blend functional furniture, soft textures, and elegant accents so every room feels complete, comfortable, and curated.
        </motion.p>
      </motion.section>

      <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] items-start">
        <div className="space-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] bg-slate-950 p-10 text-white shadow-2xl shadow-slate-950/15"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-300 font-semibold">Our approach</p>
            <h2 className="mt-4 text-3xl font-semibold">We make beautiful rooms feel effortless.</h2>
            <p className="mt-4 text-slate-200 leading-8">
              Every product is selected for its quality, versatility, and ability to enhance everyday spaces. We believe the best interiors are layered, relaxed, and always warm enough to live in.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Styled for real life",
                text: "From kitchen counters to garden corners, our pieces are practical, photogenic, and easy to love.",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
              },
              {
                title: "Natural materials",
                text: "Soft linen, hand-finished wood, and organic ceramics create calm, comforting interiors.",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={cardDelay(index)}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-slate-600 leading-7">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid gap-6 sm:grid-cols-3"
          >
            {[
              { label: "Studio founded", value: "2022" },
              { label: "Collections released", value: "14" },
              { label: "Happy homes", value: "2k+" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
                <div className="text-3xl font-semibold text-slate-900">{stat.value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl shadow-slate-950/5 transition-transform duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
              alt="Beautiful bedroom interior" className="h-[520px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-transform duration-300"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-600 font-semibold">Why we exist</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">A home should feel like the best part of your day.</h2>
            <p className="mt-4 text-slate-600 leading-8">
              Our mission is to help you build beautiful interiors that are inspiring and functional. Thoughtful products, simple styling, and warm textures are at the core of everything we do.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
