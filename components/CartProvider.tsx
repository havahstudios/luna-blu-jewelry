'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Product, formatPrice } from '@/lib/catalog';

interface CartItem {
  slug: string;
  name: string;
  price: string | null;
  img: string | null;
  collection: string;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  total: string;
  addItem: (product: Product) => void;
  removeItem: (index: number) => void;
  added: boolean;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [added, setAdded] = useState(false);

  const addItem = useCallback((product: Product) => {
    setItems(prev => [...prev, {
      slug: product.slug,
      name: product.name,
      price: product.price,
      img: product.img,
      collection: product.cats[0] ?? 'Luna Blu',
    }]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1900);
  }, []);

  const removeItem = useCallback((index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  }, []);

  const numTotal = items.reduce((sum, item) => {
    const n = parseFloat(item.price ?? '0');
    return sum + (isNaN(n) ? 0 : n);
  }, 0);

  const total = '$' + numTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <CartContext.Provider value={{ items, count: items.length, total, addItem, removeItem, added }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
