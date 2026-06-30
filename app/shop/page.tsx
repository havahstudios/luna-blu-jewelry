'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import Announcement from '@/components/Announcement';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';
import ProductCard from '@/components/ProductCard';
import { CATALOG, CATEGORIES } from '@/lib/catalog';

const CHIP_BASE = 'text-[11px] font-semibold uppercase tracking-[0.12em] px-[18px] py-[9px] rounded-full cursor-pointer whitespace-nowrap transition-all duration-200 border-[1.5px]';

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Derive cat from URL so navigation from homepage always reflects the right filter
  const cat = searchParams.get('cat') ?? 'All';
  const [q, setQ] = useState(searchParams.get('q') ?? '');

  const filtered = useMemo(() => {
    let list = CATALOG.slice();
    if (cat !== 'All') list = list.filter(p => p.cats.includes(cat));
    const term = q.trim().toLowerCase();
    if (term) list = list.filter(p => p.name.toLowerCase().includes(term));
    return list;
  }, [cat, q]);

  return (
    <div className="lb-screen max-w-wide mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-14 pb-24">
      {/* Heading */}
      <div className="text-center mb-9">
        <p className="text-[13px] font-semibold tracking-[0.24em] uppercase text-ink-500 mb-[10px]">The collection</p>
        <h1 className="font-display font-medium text-[36px] md:text-[52px] text-ink-900 m-0">{cat}</h1>
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-[10px] justify-center mb-[14px]">
        {CATEGORIES.map(c => (
          <button
            key={c}
            onClick={() => router.push(`/shop?cat=${encodeURIComponent(c)}`)}
            className={`${CHIP_BASE} ${
              c === cat
                ? 'bg-ink-900 text-ivory-50 border-ink-900'
                : 'bg-transparent text-ink-700 border-sand-400 hover:border-ink-900'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex items-center gap-[10px] max-w-[420px] mx-auto mb-10 border-b-[1.5px] border-sand-400 py-2">
        <Search size={16} className="text-ink-400" />
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search pieces"
          className="flex-1 border-none bg-transparent outline-none font-sans text-[14px] text-ink-700 placeholder:text-ink-300"
        />
      </div>

      {/* Count */}
      <p className="text-[12px] uppercase tracking-[0.10em] text-ink-400 mb-6">{filtered.length} pieces</p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
          {filtered.map(p => (
            <ProductCard key={p.slug} product={p} aspectRatio="aspect-[3/4]" />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-[16px] text-ink-400">No pieces found.</p>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-ivory-100">
      <Announcement />
      <Header />
      <Toast />
      <main className="flex-1">
        <Suspense fallback={<div className="py-24 text-center text-ink-400">Loading…</div>}>
          <ShopContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
