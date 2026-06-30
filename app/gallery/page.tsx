'use client';

import Script from 'next/script';
import Announcement from '@/components/Announcement';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';

// Paste your Behold.so Feed ID here once you have it
const BEHOLD_FEED_ID = '';

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Announcement />
      <Header />
      <Toast />

      <main className="flex-1">
        <div className="lb-screen max-w-container mx-auto px-4 sm:px-12 py-16 pb-24">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="font-display font-medium text-[54px] text-ink-900 m-0 mb-3">Gallery</h1>
            <a
              href="https://instagram.com/lunablujewelry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-ink-500 hover:text-gold-700 transition-colors no-underline tracking-[0.08em]"
            >
              @lunablujewelry
            </a>
          </div>

          {BEHOLD_FEED_ID ? (
            <>
              <div id={`behold-widget-${BEHOLD_FEED_ID}`} />
              <Script
                src="https://w.behold.so/widget.js"
                type="module"
                strategy="afterInteractive"
              />
            </>
          ) : (
            <div className="text-center py-24 border border-dashed border-sand-400 rounded-lg">
              <p className="text-[14px] text-ink-400">
                Instagram feed coming soon —{' '}
                <a
                  href="https://instagram.com/lunablujewelry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-taupe-600 hover:text-gold-700 transition-colors"
                >
                  follow @lunablujewelry
                </a>
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
