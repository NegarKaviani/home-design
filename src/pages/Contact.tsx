import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-600 font-semibold">Get in touch</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
          Connect with Ceramic.
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600 leading-8">
          Whether you have a question about styling, an order, or need interior guidance, our team is here to help. Visit our studio or send a message and we will respond within one business day.
        </p>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-600 font-semibold">Company</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Ceramic Studio</h2>
            <p className="mt-4 text-slate-600 leading-7">
              A thoughtful decor studio crafting interiors, small spaces, and lifestyle pieces for modern homes and gardens.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 font-semibold mb-4">Working hours</p>
            <div className="grid gap-3 text-slate-700">
              <div className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-3">
                <span>Monday</span>
                <span className="font-semibold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-3">
                <span>Tuesday</span>
                <span className="font-semibold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-3">
                <span>Wednesday</span>
                <span className="font-semibold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-3">
                <span>Thursday</span>
                <span className="font-semibold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-3">
                <span>Friday</span>
                <span className="font-semibold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-3 text-slate-400">
                <span>Saturday</span>
                <span>Closed</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-3 text-slate-400">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500 font-semibold">Location</p>
              <p className="mt-2 text-slate-700">123 Greenway Lane, Studio District</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500 font-semibold">Phone</p>
              <a href="tel:+1234567890" className="mt-2 block text-slate-700 hover:text-slate-900">+1 (234) 567-890</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500 font-semibold">Email</p>
              <a href="mailto:hello@ceramic.example" className="mt-2 block text-slate-700 hover:text-slate-900">hello@ceramic.example</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm">
            <iframe
              title="Ceramic Studio location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019105625633!2d-122.41941508468173!3d37.77492977975966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c1260adbd%3A0x9ee6ab1c76f886c7!2s123%20Greenway%20Lane!5e0!3m2!1sen!2sus!4v1700000000000"
              className="h-96 w-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-600 font-semibold">Send a note</p>
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input type="text" placeholder="Your name" className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea rows={5} placeholder="Tell us about your project" className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-3xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
                Send message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
