import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/contexts/CartContext';
import CartDrawer from '@/components/CartDrawer';

export const metadata: Metadata = {
  title: 'Luna Blu Jewelry',
  description: 'Timeless, high quality jewelry handmade with love in Los Angeles.',
  icons: {
    icon: 'https://assets.bigcartel.com/account_favicons/24249/favicon-96x96.png?auto=format&fit=max&h=32&w=32',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Mulish:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-ivory-100 text-ink-900 min-h-screen">
        <CartProvider>
          <CartDrawer />
          {children}
        </CartProvider>
        <a
          href="https://havahstudios.live/"
          target="_blank"
          rel="noopener noreferrer"
          className="havah-credit"
          style={{ position: 'fixed', bottom: 16, right: 20, zIndex: 999 }}
        >
          <span>Built by</span><strong className="havah-credit__name">Havah Studios</strong>
        </a>
      </body>
    </html>
  );
}
