import { EarphoneCanvas, HeadphonesCanvas } from './model/Model'

const features = [
  { stat: '40 hr', label: 'Playtime', copy: 'Enough charge for a week of commutes.' },
  { stat: '10 min', label: 'Quick charge', copy: 'A short plug-in covers the ride home.' },
  { stat: 'Dual mic', label: 'Clear calls', copy: 'Voice stays intelligible in traffic.' },
  { stat: '3D', label: 'Look closer', copy: 'Drag either product. It is a live model.' },
]

const specs = [
  ['Driver', '40 mm'],
  ['Battery', '40 hours'],
  ['Charge', 'USB-C, 10 min for 5 hours'],
  ['Weight', '248 g'],
  ['Connection', 'Bluetooth 5.3'],
  ['Mic', 'Beamforming, dual'],
]

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 8h12l-1 12H7L6 8Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 8V7a3 3 0 0 1 6 0v1" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

const App = () => {
  return (
    <div id="top" className="min-h-screen bg-white text-[#111]">
      <div className="bg-[#111] px-5 py-2 text-center text-[11px] tracking-[0.14em] text-white uppercase">
        Work sample · Drag the products to look around
      </div>

      <header className="sticky top-0 z-20 border-b border-black/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="text-2xl font-semibold tracking-tight lowercase">
            noise
          </a>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#product" className="hover:opacity-60">Headphones</a>
            <a href="#earbuds" className="hover:opacity-60">Earbuds</a>
            <a href="#sound" className="hover:opacity-60">Features</a>
            <a href="#specs" className="hover:opacity-60">Specs</a>
          </nav>
          <a href="#product" className="inline-flex items-center gap-2 text-sm" aria-label="Bag">
            <BagIcon />
            <span className="hidden sm:inline">Bag</span>
          </a>
        </div>
      </header>

      <main>
        <section id="product" className="bg-[#f3f3f3]">
          <div className="mx-auto grid max-w-6xl items-center lg:grid-cols-2">
            <div className="relative h-[68vh] lg:h-[82vh]">
              <HeadphonesCanvas />
              <p className="pointer-events-none absolute bottom-6 left-0 right-0 text-center text-[11px] tracking-[0.18em] text-black/40 uppercase">
                Drag to rotate
              </p>
            </div>
            <div className="px-5 py-12 md:px-10 lg:py-0">
              <p className="text-xs tracking-[0.22em] text-black/45 uppercase">Wireless headphones</p>
              <h1 className="mt-3 text-4xl font-medium tracking-tight md:text-6xl">Halo</h1>
              <div className="mt-4 flex items-center gap-3 text-sm">
                <span className="tracking-wide text-black/80">★★★★★</span>
                <span className="text-black/45">4.6 · concept</span>
              </div>
              <p className="mt-5 flex items-baseline gap-3">
                <span className="text-3xl font-medium">₹4,499</span>
                <span className="text-lg text-black/35 line-through">₹6,999</span>
              </p>
              <p className="mt-5 max-w-md text-base leading-relaxed text-black/60">
                Everyday headphones you can turn on the page. Forty hours of play,
                a fold-flat headband, and a model instead of a still photo.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#specs" className="rounded-full bg-[#111] px-6 py-3 text-sm font-medium text-white">
                  See specs
                </a>
                <a href="#earbuds" className="rounded-full border border-black/20 px-6 py-3 text-sm">
                  View earbuds
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="earbuds" className="bg-white">
          <div className="mx-auto grid max-w-6xl items-center lg:grid-cols-2">
            <div className="order-2 px-5 py-12 md:px-10 lg:order-1 lg:py-0">
              <p className="text-xs tracking-[0.22em] text-black/45 uppercase">Wireless earbuds</p>
              <h2 className="mt-3 text-4xl font-medium tracking-tight md:text-6xl">Pulse</h2>
              <div className="mt-4 flex items-center gap-3 text-sm">
                <span className="tracking-wide text-black/80">★★★★★</span>
                <span className="text-black/45">4.5 · concept</span>
              </div>
              <p className="mt-5 flex items-baseline gap-3">
                <span className="text-3xl font-medium">₹1,999</span>
                <span className="text-lg text-black/35 line-through">₹3,499</span>
              </p>
              <p className="mt-5 max-w-md text-base leading-relaxed text-black/60">
                A charging case on the page. The lid animation plays while you drag
                it, the same way a product photo would sit in the shop.
              </p>
              <a href="#sound" className="mt-8 inline-flex rounded-full bg-[#111] px-6 py-3 text-sm font-medium text-white">
                Explore features
              </a>
            </div>
            <div className="relative order-1 h-[68vh] bg-[#f3f3f3] lg:order-2 lg:h-[82vh]">
              <EarphoneCanvas />
              <p className="pointer-events-none absolute bottom-6 left-0 right-0 text-center text-[11px] tracking-[0.18em] text-black/40 uppercase">
                Drag to rotate
              </p>
            </div>
          </div>
        </section>

        <section id="sound" className="border-t border-black/10 bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Built for the day</h2>
            <div className="mt-10 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <article key={feature.label} className="bg-white p-6">
                  <p className="text-3xl font-medium tracking-tight">{feature.stat}</p>
                  <h3 className="mt-3 text-sm font-medium">{feature.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/55">{feature.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="specs" className="bg-[#f3f3f3]">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Halo specs</h2>
              <p className="max-w-sm text-sm text-black/50">
                Concept numbers for this sample. Not a real Noise product listing.
              </p>
            </div>
            <dl className="mt-10 bg-white">
              {specs.map(([label, value]) => (
                <div key={label} className="grid grid-cols-2 gap-4 border-b border-black/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[220px_1fr]">
                  <dt className="text-black/45">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <footer className="bg-[#111] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
          <div>
            <p className="text-2xl font-semibold tracking-tight lowercase">noise</p>
            <p className="mt-3 max-w-sm text-sm text-white/55">
              Personal work sample. Not an official Noise website.
            </p>
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-white/40">
            Headphones by QuickDriftVR. Earbuds by zhe_kan. Both CC-BY-4.0, via Sketchfab.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
