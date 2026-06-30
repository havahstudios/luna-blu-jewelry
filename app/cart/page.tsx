'use client';

import Image from 'next/image';
import Link from 'next/link';
import { X, ShoppingBag } from 'lucide-react';
import Announcement from '@/components/Announcement';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';
import { useCart } from '@/contexts/CartContext';

export default function CartPage() {
  const { items, count, total, removeItem } = useCart();

  async function handleCheckout() {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  }

  return (
    <div className="flex flex-col min-h-screen font-sans bg-ivory-100">
      <Announcement />
      <Header />
      <Toast />

      <main className="flex-1">
        <div className="lb-screen max-w-[840px] mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-16 pb-20 md:pb-24">
          <h1 className="font-display font-medium text-[36px] md:text-[52px] text-ink-900 m-0 mb-8 md:mb-10">Your bag</h1>

          {count === 0 ? (
            <div className="text-center py-16 px-6 border border-sand-300 rounded-lg">
              <ShoppingBag size={32} className="text-ink-400 mx-auto mb-4" />
              <p className="text-[15px] text-ink-500 mb-6">Your bag is empty.</p>
              <Link
                href="/shop"
                className="inline-flex items-center h-11 px-7 border-[1.5px] border-ink-900 text-ink-900 text-[13px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-ink-900 hover:text-ivory-50 transition-colors no-underline"
              >
                Start shopping
              </Link>
            </div>
          ) : (
            <div>
              <div className="border-t border-sand-300">
                {items.map(item => (
                  <div key={item.id} className="flex gap-5 items-center py-5 border-b border-sand-300">
                    <div className="w-[84px] h-[84px] rounded-sm overflow-hidden bg-[#e7ded2] flex-none">
                      {item.image && (
                        <Image src={item.image} alt={item.name} width={84} height={84} className="object-cover w-full h-full" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-display text-[22px] text-ink-900 leading-[1.15]">{item.name}</div>
                      <div className="text-[13px] text-ink-400 mt-1">Qty: {item.quantity}</div>
                    </div>
                    <div className="text-[16px] text-ink-900">${(item.price * item.quantity).toFixed(2)}</div>
                    <button
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove"
                      className="border-none bg-transparent cursor-pointer text-ink-400 hover:text-ink-900 transition-colors inline-flex"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center py-7">
                <span className="text-[13px] uppercase tracking-[0.14em] text-ink-500">Subtotal</span>
                <span className="font-display text-[32px] text-ink-900">${total.toFixed(2)}</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full h-14 bg-ink-900 text-ivory-50 text-[13px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-ink-800 transition-colors"
              >
                Proceed to checkout
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
