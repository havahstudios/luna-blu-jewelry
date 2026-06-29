import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SuccessPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans" style={{ background: '#FDFCFA' }}>
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-[480px]">
          {/* Ornament */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16" style={{ background: 'rgba(184,147,80,0.35)' }} />
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1L10.5 7H17L11.5 10.5L13.5 17L9 13L4.5 17L6.5 10.5L1 7H7.5L9 1Z"
                fill="rgba(184,147,80,0.55)" />
            </svg>
            <div className="h-px w-16" style={{ background: 'rgba(184,147,80,0.35)' }} />
          </div>

          <p className="text-[12px] font-semibold tracking-[0.28em] uppercase mb-5" style={{ color: '#B89350' }}>
            Order confirmed
          </p>
          <h1 className="font-display font-light leading-[1.1] mb-5" style={{ fontSize: 48, color: '#1C1814' }}>
            Thank you for<br />your order
          </h1>
          <p className="font-light leading-[1.9] mb-10" style={{ fontSize: 14, color: '#8C7E6C', maxWidth: 340, margin: '0 auto 40px' }}>
            You'll receive a confirmation email shortly. Each piece is handmade with love in Los Angeles — we can't wait for you to wear it.
          </p>
          <Link
            href="/shop"
            className="inline-block text-[12px] font-semibold tracking-[0.20em] uppercase border-b pb-[2px] transition-colors duration-300 no-underline"
            style={{ color: '#1C1814', borderColor: 'rgba(28,24,20,0.25)' }}
          >
            Continue shopping
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
