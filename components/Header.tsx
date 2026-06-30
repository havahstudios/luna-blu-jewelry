'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ShoppingBag, ChevronDown, X, Menu } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { CATEGORIES } from '@/lib/catalog';

const NAV_LINK = 'text-[13px] font-semibold tracking-[0.14em] uppercase no-underline text-ink-700 hover:text-gold-600 transition-colors duration-300 cursor-pointer';

export default function Header() {
  const { count, openCart } = useCart();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState('');

  const menuCats = CATEGORIES.slice(1);

  function handleCatClick(cat: string) {
    setMenuOpen(false);
    setMobileOpen(false);
    router.push(`/shop?cat=${encodeURIComponent(cat)}`);
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchQ.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQ.trim())}`);
      setSearchOpen(false);
      setSearchQ('');
    }
  }

  return (
    <>
      <header className="sticky top-0 z-40 bg-ivory-100/96 backdrop-blur-md border-b border-sand-200">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 py-[20px] md:py-[26px] grid grid-cols-3 items-center gap-4 md:gap-6">
          {/* Left nav — hidden on mobile, hamburger handles it */}
          <nav className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => setMenuOpen(o => !o)}
              className={`${NAV_LINK} flex items-center gap-[4px] border-none bg-transparent p-0`}
            >
              Shop <ChevronDown size={11} className={`transition-transform duration-300 ${menuOpen ? 'rotate-180' : ''}`} />
            </button>
            <Link href="/sizing" className={NAV_LINK}>Sizing</Link>
          </nav>

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-display font-medium text-[22px] md:text-[26px] tracking-[0.22em] text-ink-900 no-underline text-center leading-none pl-[0.22em] whitespace-nowrap"
          >
            LUNA&nbsp;BLU
          </Link>

          {/* Right nav */}
          <div className="flex items-center justify-end gap-[28px]">
            <nav className="hidden md:flex gap-[28px]">
              <Link href="/gallery" className={NAV_LINK}>Gallery</Link>
              <Link href="/contact" className={NAV_LINK}>Contact</Link>
            </nav>
            <div className="flex items-center gap-[2px]">
              <button
                aria-label="Search"
                onClick={() => setSearchOpen(o => !o)}
                className="w-9 h-9 border-none bg-transparent text-ink-700 hover:text-gold-600 transition-colors cursor-pointer inline-flex items-center justify-center"
              >
                <Search size={16} />
              </button>
              <button
                onClick={openCart}
                aria-label="Cart"
                className="relative w-9 h-9 border-none bg-transparent text-ink-700 hover:text-gold-600 transition-colors inline-flex items-center justify-center cursor-pointer"
              >
                <ShoppingBag size={16} />
                {count > 0 && (
                  <span className="absolute top-[3px] right-[1px] min-w-[14px] h-[14px] px-[3px] bg-gold-500 text-ink-900 text-[8px] font-bold flex items-center justify-center">
                    {count}
                  </span>
                )}
              </button>
              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(o => !o)}
                className="md:hidden w-9 h-9 border-none bg-transparent text-ink-700 hover:text-gold-600 transition-colors inline-flex items-center justify-center ml-1"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Shop dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 border-b border-sand-200 shadow-[0_8px_32px_rgba(60,48,30,0.14)] z-50" style={{ background: '#EDE8E0' }}>
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 py-7 md:py-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[14px_20px] md:gap-[16px_28px]">
              {menuCats.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCatClick(cat)}
                  className="font-display italic text-[21px] font-medium text-ink-900 hover:text-gold-600 transition-colors duration-300 cursor-pointer text-left border-none bg-transparent p-0"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search bar */}
        {searchOpen && (
          <div className="border-b border-sand-200 bg-ivory-50">
            <form onSubmit={handleSearch} className="max-w-[440px] mx-auto flex items-center gap-3 px-6 py-[14px]">
              <Search size={14} className="text-ink-400 flex-none" />
              <input
                autoFocus
                value={searchQ}
                onChange={e => setSearchQ(e.target.value)}
                placeholder="Search pieces…"
                className="flex-1 border-none bg-transparent outline-none font-sans text-[14px] text-ink-700 placeholder:text-ink-300"
              />
              <button type="button" onClick={() => setSearchOpen(false)} className="text-ink-400 hover:text-ink-900 transition-colors">
                <X size={14} />
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-ivory-100 flex flex-col md:hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-sand-200">
            <span className="font-display font-medium text-[22px] tracking-[0.22em] text-ink-900">LUNA&nbsp;BLU</span>
            <button onClick={() => setMobileOpen(false)} className="text-ink-700"><X size={20} /></button>
          </div>
          <nav className="flex flex-col gap-0 px-6 pt-5">
            <p className="text-[9px] uppercase tracking-[0.24em] text-ink-400 mb-4 font-semibold">Shop</p>
            {menuCats.map(cat => (
              <button
                key={cat}
                onClick={() => handleCatClick(cat)}
                className="text-left py-[14px] border-b border-sand-200 font-display italic text-[24px] text-ink-900 hover:text-gold-600 transition-colors bg-transparent border-x-0 border-t-0"
              >
                {cat}
              </button>
            ))}
            <div className="mt-5 flex flex-col gap-4">
              {[{ label: 'Sizing', href: '/sizing' }, { label: 'Gallery', href: '/gallery' }, { label: 'Contact', href: '/contact' }].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[11px] font-semibold tracking-[0.16em] uppercase text-ink-600 hover:text-gold-600 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* Backdrop */}
      {menuOpen && (
        <div className="fixed inset-0 z-30" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
