import Image from 'next/image';
import Link from 'next/link';
import Announcement from '@/components/Announcement';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';
import { CATALOG } from '@/lib/catalog';

const galleryItems = CATALOG.filter(p => p.img).slice(0, 18);

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-ivory-100">
      <Announcement />
      <Header />
      <Toast />

      <main className="flex-1">
        <div className="lb-screen max-w-container mx-auto px-12 py-16 pb-24">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-[12px] font-semibold tracking-eyebrow uppercase text-ink-500 mb-3">As seen &amp; worn</p>
            <h1 className="font-display font-medium text-[54px] text-ink-900 m-0 mb-[14px]">Gallery</h1>
            <p className="text-[14px] text-ink-500">
              Follow along{' '}
              <a
                href="https://instagram.com/lunablujewelry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-taupe-600 hover:text-gold-700 transition-colors"
              >
                @lunablujewelry
              </a>
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[14px]">
            {galleryItems.map(p => (
              <Link
                key={p.slug}
                href={`/product/${p.slug}`}
                className="lb-tile-zoom relative block aspect-square overflow-hidden rounded-sm bg-[#e7ded2] no-underline"
              >
                <Image
                  src={p.img!}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-[600ms] ease-soft"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
