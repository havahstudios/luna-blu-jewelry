import Image from 'next/image';
import Announcement from '@/components/Announcement';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';

const PHOTOS = Array.from({ length: 26 }, (_, i) => `/gallery/gallery-${String(i + 1).padStart(2, '0')}.jpg`);

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Announcement />
      <Header />
      <Toast />

      <main className="flex-1">
        <div className="lb-screen max-w-container mx-auto px-4 sm:px-12 py-16 pb-24">
          {/* Heading */}
          <div className="text-center mb-12">
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

          {/* Masonry grid */}
          <div className="columns-2 sm:columns-3 gap-x-[14px] [&>*]:break-inside-avoid [&>*]:mb-[14px]">
            {PHOTOS.map((src, i) => (
              <a
                key={src}
                href="https://instagram.com/lunablujewelry"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-sm group"
              >
                <Image
                  src={src}
                  alt={`Luna Blu — photo ${i + 1}`}
                  width={800}
                  height={1000}
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
