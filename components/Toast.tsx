'use client';

import { Check } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function Toast() {
  const { added } = useCart();
  if (!added) return null;
  return (
    <div className="lb-toast-anim fixed left-1/2 bottom-8 -translate-x-1/2 z-[60] bg-ink-900 text-ivory-50 px-6 py-[14px] rounded-full text-[13px] tracking-[0.04em] shadow-lg flex items-center gap-[10px]">
      <Check size={16} className="text-gold-400" />
      Added to your bag
    </div>
  );
}
