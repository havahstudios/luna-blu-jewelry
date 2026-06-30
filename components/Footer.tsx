'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Instagram, Facebook, ArrowRight } from 'lucide-react';

function TikTokIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.97a8.23 8.23 0 0 0 4.84 1.57V7.1a4.85 4.85 0 0 1-1.07-.41z" />
    </svg>
  );
}

const FOOT_LINK = 'lb-foot-link text-[13px] text-ink-500 no-underline cursor-pointer hover:text-gold-700 transition-colors';

const SHOP_LINKS = [
  { label: 'All Products', cat: 'All' },
  { label: 'Best Sellers', cat: 'Best Sellers' },
  { label: 'Spring/Summer', cat: 'Spring/Summer' },
  { label: 'One-of-One', cat: 'One-of-One' },
  { label: 'Rings', cat: 'Rings' },
  { label: 'Necklaces', cat: 'Necklaces' },
  { label: 'Bracelets', cat: 'Bracelets' },
];

const CARE_LINKS = [
  { label: 'Sizing & Custom Orders', href: '/sizing' },
  { label: 'Contact', href: '/contact' },
  { label: 'Gallery', href: '/gallery' },
];

const SOCIAL = [
  { label: 'Instagram', href: 'https://instagram.com/lunablujewelry', Icon: Instagram },
  { label: 'TikTok',    href: 'https://tiktok.com/@lunablujewelry',   Icon: TikTokIcon },
  { label: 'Facebook',  href: 'https://facebook.com/lunablujewelry',  Icon: Facebook },
];

export default function Footer() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-ivory-100 border-t border-sand-300 mt-2">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-12 pt-12 md:pt-[72px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.4fr] gap-10">
          {/* Brand */}
          <div>
            <div className="font-display font-medium text-[24px] tracking-[0.18em] text-ink-900 mb-4">LUNA&nbsp;BLU</div>
            <p className="text-[14px] text-ink-500 leading-[1.7] mb-[22px] max-w-[280px]">
              Timeless, high-quality jewelry — designed &amp; sourced with love in Los Angeles, CA.
            </p>
            <div className="flex gap-3">
              {SOCIAL.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-sand-300 text-ink-700 hover:bg-gold-500 hover:text-ink-900 transition-colors inline-flex items-center justify-center"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-[18px] font-semibold text-ink-900 mb-[18px]">Shop</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-[11px]">
              {SHOP_LINKS.map(({ label, cat }) => (
                <li key={cat}>
                  <button
                    onClick={() => router.push(`/shop?cat=${encodeURIComponent(cat)}`)}
                    className={`${FOOT_LINK} bg-transparent border-none p-0`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-display text-[18px] font-semibold text-ink-900 mb-[18px]">Help</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-[11px]">
              {CARE_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={FOOT_LINK}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-[18px] font-semibold text-ink-900 mb-[18px]">Stay in touch</h4>
            <p className="text-[13px] text-ink-500 leading-[1.6] mb-4">
              New drops, one-of-ones, and restocks — straight to your inbox.
            </p>
            <form
              onSubmit={e => { e.preventDefault(); setEmail(''); }}
              className="flex items-end gap-[10px] border-b-[1.5px] border-sand-400 pb-[6px]"
            >
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 border-none bg-transparent outline-none font-sans text-[14px] text-ink-700 placeholder:text-ink-300 py-[6px]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="border-none bg-transparent cursor-pointer text-ink-900 hover:text-gold-700 transition-colors inline-flex"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-sand-300 mt-14 py-6 pb-8 flex flex-wrap justify-between items-center gap-3">
          <span className="text-[12px] text-ink-400 tracking-[0.06em]">© Luna Blu 2026 — Los Angeles, CA</span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[12px] text-ink-500 no-underline hover:text-gold-700 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[12px] text-ink-500 no-underline hover:text-gold-700 transition-colors">Terms of Use</a>
            <a
              href="https://havahstudios.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="havah-credit"
            >
              <span>Built by</span> <strong className="havah-credit__name">Havah Studios</strong>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
