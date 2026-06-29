'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function Announcement() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="bg-ink-900 text-ivory-50 text-center py-[9px] px-4 text-[11px] font-semibold tracking-[0.16em] uppercase relative">
      Free shipping on US orders over $250 with code FREESHIP
      <button
        onClick={() => setVisible(false)}
        aria-label="Close announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory-50/70 hover:text-ivory-50 transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
}
