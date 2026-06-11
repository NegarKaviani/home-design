import { type ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { newsItems } from "../../data/news";

interface Slide {
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "Sustainable design",
    description: "Discover our latest eco-friendly architecture and product styling.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Indoor greenery",
    description: "Learn how biophilic spaces improve comfort and wellbeing.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Modern craftsmanship",
    description: "Handcrafted finishes and premium materials for every room.",
    image: "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=900&q=80",
  },
];

export const AboutPreview = (): ReactElement => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const prevSlide = (): void => setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  const nextSlide = (): void => setActiveIndex((current) => (current + 1) % slides.length);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Explore our latest ideas</h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
          Get a quick overview of what’s new in the studio, from design inspiration to curated product previews.
        </p>
      </div>

      <div className="mt-10 grid gap-16 md:gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="relative rounded-[32px] border border-slate-200 bg-white shadow-sm shadow-slate-900/5">
          <img
            src={slides[activeIndex].image}
            alt={slides[activeIndex].title}
            className="h-full w-full rounded-[32px] object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 rounded-b-[32px] bg-gradient-to-t from-slate-950/85 to-transparent p-6 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-200">Slider</p>
            <h3 className="mt-2 text-2xl font-semibold">{slides[activeIndex].title}</h3>
            <p className="mt-2 max-w-xl text-sm text-slate-100">{slides[activeIndex].description}</p>
          </div>
          <div className="">
            <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 md:flex">
              <button
                type="button"
                onClick={prevSlide}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-sm transition hover:bg-white"
                aria-label="Previous slide"
              >
                ◀
              </button>
            </div>
            <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 md:flex">
              <button
                type="button"
                onClick={nextSlide}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-sm transition hover:bg-white"
                aria-label="Next slide"
              >
                ▶
              </button>
            </div>
            <div className="absolute right-4 bottom-4 flex gap-2 md:hidden">
              <button
                type="button"
                onClick={prevSlide}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-sm transition hover:bg-white"
                aria-label="Previous slide"
              >
                ◀
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-sm transition hover:bg-white"
                aria-label="Next slide"
              >
                ▶
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
          <div className="space-y-4">
            {newsItems.slice(-2).map((news) => (
              <article key={news.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span className="font-medium text-slate-900">{news.title}</span>
                  <time>{news.date}</time>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{news.excerpt}</p>
                <div className="mt-5">
                  <Link
                    to={`/news/${news.slug}`}
                    className="inline-flex rounded-2xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <Link
            to="/news"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View all
          </Link>
        </div>
      </div>
    </section>
  );
};
