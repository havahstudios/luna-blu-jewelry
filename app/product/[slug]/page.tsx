'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Announcement from '@/components/Announcement';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/contexts/CartContext';
import { CATALOG, getProductBySlug, formatPrice } from '@/lib/catalog';

export default function ProductPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen bg-ivory-100">
        <Announcement />
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-24">
            <p className="font-display text-[32px] text-ink-900 mb-4">Product not found</p>
            <Link href="/shop" className="text-taupe-600 hover:text-gold-700 text-[14px] underline">Back to shop</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const collection = product.cats[0] ?? 'Luna Blu';
  const price = formatPrice(product.price);

  const descRaw = product.desc ?? 'Handmade with love in Los Angeles, CA.\nHypoallergenic, waterproof, and tarnish-free.';
  const bullets = descRaw.split('\n').map(s => s.trim()).filter(Boolean);

  // Related products: same category, exclude current
  const related = CATALOG
    .filter(p => p.slug !== product.slug && p.img && p.cats.some(c => product.cats.includes(c)))
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-ivory-100">
      <Announcement />
      <Header />
      <Toast />

      <main className="flex-1">
        <div className="lb-screen max-w-container mx-auto px-4 sm:px-6 md:px-12 pt-8 md:pt-10 pb-20 md:pb-24">
          {/* Back button */}
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 mb-9 text-[12px] font-semibold tracking-[0.12em] uppercase text-ink-500 hover:text-gold-700 transition-colors no-underline"
          >
            <ArrowLeft size={15} /> Back to shop
          </Link>

          {/* Product grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-sm bg-[#e7ded2]">
              {product.img ? (
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-sand-300">
                  <span className="text-ink-400 font-sans">No image</span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="pt-2">
              <div className="text-[11px] font-semibold tracking-[0.20em] uppercase text-ink-400 mb-[14px]">
                {collection}
              </div>
              <h1 className="font-display font-medium text-[32px] md:text-[46px] leading-[1.08] text-ink-900 m-0 mb-4">
                {product.name}
              </h1>
              <div className="text-[22px] text-ink-900 font-sans mb-7">{price}</div>

              <div className="h-px bg-sand-300 mb-[26px]" />

              {/* Description */}
              <ul className="list-none p-0 m-0 mb-8 flex flex-col gap-[11px]">
                {bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-ink-500 leading-[1.55]">
                    <span className="text-gold-500 flex-none">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Add to bag */}
              <button
                onClick={() => addItem({
                  id: product.slug,
                  name: product.name,
                  price: parseFloat(product.price ?? '0'),
                  image: product.img ?? '',
                })}
                disabled={product.soldout}
                className="w-full h-[56px] bg-ink-900 text-ivory-50 text-[13px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-ink-800 active:bg-ink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-6"
              >
                {product.soldout ? 'Sold Out' : `Add to bag — ${price}`}
              </button>

              {/* Tags */}
              <div className="flex gap-[10px] flex-wrap mb-7">
                {['Handmade', 'Hypoallergenic'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 h-7 rounded-sm bg-sand-300 text-ink-700 text-[11px] font-semibold tracking-[0.10em] uppercase inline-flex items-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-[13px] text-ink-400 leading-[1.7] m-0">
                For custom orders, additional sizing, or sourcing requests email{' '}
                <a href="mailto:lunablujewels@gmail.com" className="text-taupe-600 hover:text-gold-700 transition-colors">
                  lunablujewels@gmail.com
                </a>.
              </p>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-24">
              <h2 className="font-display font-medium text-[34px] text-ink-900 m-0 mb-8 text-center">
                You may also like
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
                {related.map(p => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
