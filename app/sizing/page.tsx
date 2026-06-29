import Link from 'next/link';
import Announcement from '@/components/Announcement';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';

const RING_SIZES = [
  { mm: '15.7 mm', us: '5' },
  { mm: '16.5 mm', us: '6' },
  { mm: '17.3 mm', us: '7' },
  { mm: '18.1 mm', us: '8' },
  { mm: '18.9 mm', us: '9' },
];

const CARD = 'border border-sand-300 rounded-sm bg-ivory-50';

export default function SizingPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-ivory-100">
      <Announcement />
      <Header />
      <Toast />

      <main className="flex-1">
        <div className="lb-screen max-w-[1040px] mx-auto px-12 py-16 pb-24">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="text-[12px] font-semibold tracking-eyebrow uppercase text-ink-500 mb-3">Made to fit you</p>
            <h1 className="font-display font-medium text-[54px] text-ink-900 m-0">Sizing &amp; Custom Orders</h1>
          </div>

          {/* Cards row */}
          <div className="grid md:grid-cols-2 gap-7 mb-7">
            {/* Ring sizes */}
            <div className={`${CARD} p-10`}>
              <h3 className="font-display font-semibold text-[26px] text-ink-900 m-0 mb-[14px]">Ring size guide</h3>
              <p className="text-[14px] text-ink-500 leading-[1.65] m-0 mb-[22px]">
                Use a piece of ribbon or string to measure the desired finger, then match the circumference to the chart below.
              </p>
              <div className="border-t border-sand-300">
                {RING_SIZES.map(r => (
                  <div
                    key={r.us}
                    className="flex justify-between py-3 border-b border-sand-300 text-[14px]"
                  >
                    <span className="text-ink-500">{r.mm}</span>
                    <span className="text-ink-900 font-semibold">US {r.us}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bracelet + Necklace */}
            <div className="flex flex-col gap-7">
              <div className={`${CARD} p-10`}>
                <h3 className="font-display font-semibold text-[26px] text-ink-900 m-0 mb-[14px]">Bracelet size guide</h3>
                <p className="text-[14px] text-ink-500 leading-[1.7] m-0">
                  Measure your wrist with ribbon or string, then allow an additional half inch for comfortable wear, depending on your preferred fit.
                </p>
              </div>
              <div className={`${CARD} p-10`}>
                <h3 className="font-display font-semibold text-[26px] text-ink-900 m-0 mb-[14px]">Necklace length guide</h3>
                <p className="text-[14px] text-ink-500 leading-[1.7] m-0">
                  Most chokers sit at 14–16 in and statement pieces layer from 18 in down. Many designs are adjustable — measurements are listed on each product.
                </p>
              </div>
            </div>
          </div>

          {/* Custom orders CTA */}
          <div className="rounded-sm bg-ivory-50 shadow-sm px-12 py-12 text-center">
            <p className="text-[12px] font-semibold tracking-eyebrow uppercase text-ink-500 mb-[14px]">One of a kind</p>
            <h3 className="font-display font-medium text-[34px] text-ink-900 m-0 mb-[14px]">Custom orders &amp; sourcing</h3>
            <p className="text-[15px] text-ink-500 leading-[1.7] m-0 mx-auto mb-7 max-w-[520px]">
              For custom orders, additional colours and sizes, or special sourcing requests, please don&apos;t hesitate to reach out — we&apos;ll accompany you through every step.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center h-11 px-7 rounded-sm bg-ink-900 text-ivory-50 text-[13px] font-semibold tracking-[0.12em] uppercase hover:bg-ink-800 transition-colors no-underline"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
