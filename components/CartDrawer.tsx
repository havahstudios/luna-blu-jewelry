'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, total } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeCart();
    }
    if (isOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, closeCart]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

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
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-[2px] transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full z-[60] flex flex-col w-full max-w-[420px] transition-transform duration-300 ease-in-out"
        style={{
          background: '#FAF8F4',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          boxShadow: isOpen ? '-8px 0 40px rgba(28,24,20,0.12)' : 'none',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-6 border-b border-[#EDE8E0]">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} className="text-[#1C1814]" />
            <span className="font-display text-[20px] font-light tracking-[0.04em] text-[#1C1814]">
              Your cart
            </span>
          </div>
          <button
            onClick={closeCart}
            className="w-8 h-8 flex items-center justify-center text-[#8C7E6C] hover:text-[#1C1814] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-7 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={36} className="text-[#C8B8A4]" />
              <p className="font-light text-[14px] text-[#8C7E6C]">Your cart is empty</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map(item => (
                <li key={item.id} className="flex gap-4">
                  {item.image && (
                    <div className="relative w-20 h-24 flex-none overflow-hidden" style={{ background: '#EDE7DC' }}>
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                    </div>
                  )}
                  <div className="flex flex-col flex-1 min-w-0">
                    <p className="font-display font-light text-[15px] text-[#1C1814] leading-[1.3] mb-1">
                      {item.name}
                    </p>
                    <p className="text-[13px] text-[#A89478] mb-3">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="flex items-center border border-[#DDD4C6]">
                        <button
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-[#8C7E6C] hover:text-[#1C1814] transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-[13px] text-[#1C1814]">{item.quantity}</span>
                        <button
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-[#8C7E6C] hover:text-[#1C1814] transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#A89478] hover:text-[#1C1814] transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-7 py-6 border-t border-[#EDE8E0]">
            <div className="flex justify-between items-center mb-5">
              <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#8C7E6C]">Total</span>
              <span className="font-display text-[22px] font-light text-[#1C1814]">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full py-4 text-[12px] font-semibold tracking-[0.22em] uppercase transition-colors duration-300"
              style={{ background: '#1C1814', color: '#FAF8F4' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#B89350')}
              onMouseLeave={e => (e.currentTarget.style.background = '#1C1814')}
            >
              Checkout
            </button>
            <p className="text-center text-[11px] text-[#A89478] mt-3 tracking-[0.06em]">
              Secure checkout via Stripe
            </p>
          </div>
        )}
      </div>
    </>
  );
}
