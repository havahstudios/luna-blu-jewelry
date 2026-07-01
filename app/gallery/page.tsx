import Image from 'next/image';
import Announcement from '@/components/Announcement';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';

const PHOTOS = Array.from({ length: 26 }, (_, i) => `/gallery/gallery-${String(i + 1).padStart(2, '0')}.jpg`);

// Pre-set tilts per index so they're consistent between renders
const TILTS = [
  -2.6,  1.9, -3.3,  2.4, -1.8,  3.5,
  -2.9,  1.4, -3.1,  2.7, -1.5,  3.8,
  -2.3,  1.7, -3.6,  2.2, -1.9,  3.2,
  -2.7,  1.5, -3.4,  2.6, -1.6,  3.7,
  -2.5,  1.8,
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#F0EBE1]">
      <Announcement />
      <Header />
      <Toast />

      <main className="flex-1">
        <div className="lb-screen max-w-container mx-auto px-4 sm:px-12 py-16 pb-32">
          {/* Heading */}
          <div className="text-center mb-14">
            <h1 className="font-display font-medium text-[54px] text-ink-900 m-0 mb-3">Gallery</h1>
            <a
              href="https://instagram.com/lunablujewelry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-ink-500 hover:text-gold-700 transition-colors no-underline tracking-[0.08em]"
            >
              @lunablujewelry
            </a>
          </div>

          {/* Scrapbook grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-14">
            {PHOTOS.map((src, i) => (
              <a
                key={src}
                href="https://instagram.com/lunablujewelry"
                target="_blank"
                rel="noopener noreferrer"
                className="lb-polaroid"
                style={{ transform: `rotate(${TILTS[i]}deg)` }}
              >
                <div className="bg-white p-[10px] pb-[38px] shadow-[0_3px_12px_rgba(0,0,0,0.09),0_1px_3px_rgba(0,0,0,0.07)]">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={src}
                      alt={`Luna Blu — photo ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
