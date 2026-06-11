export const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:h-[70vh] md:grid-cols-[70%_30%]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] shadow-lg shadow-slate-900/10 sm:aspect-[16/10] md:h-full md:aspect-auto">
          <img
            src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80"
            alt="Hero background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/30" />
          <div className="absolute inset-0 flex flex-col justify-end p-4 text-white sm:p-6">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-200 sm:text-xs">Featured image</p>
            <h2 className="mt-2 text-xl font-semibold sm:mt-3 sm:text-2xl">Hero section</h2>
          </div>
        </div>

        <div className="grid gap-4 md:h-full md:grid-rows-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] shadow-sm shadow-slate-900/5 md:h-full md:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=800&q=80"
              alt="Top tile"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/15" />
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] shadow-sm shadow-slate-900/5 md:h-full md:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
              alt="Bottom tile"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/15" />
          </div>
        </div>
      </div>
    </section>
  )
}
