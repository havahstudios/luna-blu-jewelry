import Image from 'next/image';
import Link from 'next/link';
import Announcement from '@/components/Announcement';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';
const HERO_IMG      = 'https://assets.bigcartel.com/theme_images/141489810/DCDFCBF3-CC0E-4301-8660-91502512F72B_1_201_a.jpeg?auto=format&fit=max&w=2560&q=90';
const ISLA_IMG      = 'https://assets.bigcartel.com/product_images/409155333/91ABA159-7EAA-4AF5-A5C7-4AB15B3AD8B2_1_102_a.jpeg?auto=format&fit=max&w=900';
const LORA_IMG      = 'https://assets.bigcartel.com/product_images/409155639/6E4124C2-C83F-45FB-933D-4411DEFDC894_1_102_a.jpeg?auto=format&fit=max&w=900';
const COLLAR_IMG    = 'https://assets.bigcartel.com/product_images/397145241/33A507ED-56AB-4DE4-967C-8C8D2A945DFD.jpeg?auto=format&fit=max&w=900';
const BEST_IMG      = 'https://assets.bigcartel.com/product_images/415873692/IMG_7442.jpeg?auto=format&fit=max&w=1200';
const ONE_IMG       = 'https://assets.bigcartel.com/product_images/421574505/38232BDD-44BC-4496-A6B0-7890172C307B_1_102_o.jpeg?auto=format&fit=max&w=1200';
const SPRING_IMG    = 'https://assets.bigcartel.com/product_images/411862347/EE928A8E-3F07-42DA-AB30-E858455138C0.jpg?auto=format&fit=max&w=1200';
const STATEMENT_IMG = 'https://d8j0ntlcm91z4.cloudfront.net/user_3FMhilSpECLOMASCYeTtegjcBJK/hf_20260628_202552_8ea8e494-1373-420d-a002-2416b056af12.png';
const LIFE_IMG      = 'https://assets.bigcartel.com/product_images/387560700/DC207D1F-109F-4051-92D8-6F303D9A9B83_1_201_a.jpg?auto=format&fit=max&w=2400&q=90';

const EYEBROW  = 'text-[12px] font-semibold tracking-[0.28em] uppercase';
const DISCOVER = 'inline-block text-[12px] font-semibold tracking-[0.20em] uppercase border-b pb-[2px] transition-colors duration-300 no-underline';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans" style={{ background: '#FDFCFA' }}>
      <Announcement />
      <Header />
      <Toast />

      <main className="flex-1">

        {/* ── 1. HERO — full viewport ── */}
        <section className="relative h-screen min-h-[640px] max-h-[1080px] overflow-hidden"
          style={{ background: '#E8E0D4' }}>
          <Image src={HERO_IMG} alt="Luna Blu" fill priority quality={90}
            className="object-cover object-[center_25%]"
            sizes="100vw" />
          {/* dark scrim bottom-left for text legibility */}
          <div className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top right, rgba(20,16,12,0.52) 0%, rgba(20,16,12,0.18) 55%, rgba(20,16,12,0) 100%)'
            }} />

          <div className="absolute bottom-0 left-0 right-0 z-[3]
            max-w-container mx-auto px-4 sm:px-8 md:px-12 pb-[80px] sm:pb-[140px] md:pb-[220px]
            flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-10">
            <div>
              <h1 className="font-sans font-light m-0 max-w-[680px]"
                style={{ fontSize: 'clamp(44px, 7vw, 96px)', lineHeight: 0.92, color: '#FDFCFA' }}>
                Customize<br />your collection
              </h1>
            </div>
          </div>
        </section>


        {/* ── 2. SIGNATURE PIECES — 3-column editorial grid ── */}
        <section className="py-[72px] md:py-[140px] px-4 sm:px-[6vw]" style={{ background: '#FAF8F4' }}>
          <p className="text-[16px] font-semibold tracking-[0.28em] uppercase text-center mb-[72px]" style={{ color: '#B89350' }}>
            Signature Pieces
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[4vw] gap-y-10 md:gap-y-16 max-w-[1160px] mx-auto">

            {/* 1 — Isla */}
            <div className="flex flex-col">
              <div className="overflow-hidden mb-7" style={{ background: '#EDE7DC' }}>
                <Image src={ISLA_IMG} alt="Isla Statement Mirrored Necklace"
                  width={480} height={600} className="w-full h-auto block" />
              </div>
              <p className={`${EYEBROW} mb-2`} style={{ fontSize: 10, color: '#A89478' }}>Best Sellers</p>
              <h3 className="font-sans font-medium m-0 mb-2 leading-[1.15]"
                style={{ fontSize: 22, color: '#1C1814' }}>
                Isla Statement<br />Mirrored Necklace
              </h3>
              <p className="font-light mb-5" style={{ fontSize: 13, color: '#A89478' }}>$215</p>
              <Link href="/product/isla-necklace" className={`${DISCOVER}`}
                style={{ color: '#1C1814', borderColor: 'rgba(28,24,20,0.22)' }}>
                Shop now
              </Link>
            </div>

            {/* 2 — Collared Metal Choker (center) */}
            <div className="flex flex-col">
              <div className="overflow-hidden mb-7" style={{ background: '#EDE7DC' }}>
                <Image src={COLLAR_IMG} alt="Collared Metal Choker Gold Filled"
                  width={480} height={600} className="w-full h-auto block" />
              </div>
              <p className={`${EYEBROW} mb-2`} style={{ fontSize: 10, color: '#A89478' }}>Best Sellers</p>
              <h3 className="font-sans font-medium m-0 mb-2 leading-[1.15]"
                style={{ fontSize: 22, color: '#1C1814' }}>
                Collared Metal<br />Choker — Gold
              </h3>
              <p className="font-light mb-5" style={{ fontSize: 13, color: '#A89478' }}>$180</p>
              <Link href="/product/collared-metal-choker-gold-filled" className={`${DISCOVER}`}
                style={{ color: '#1C1814', borderColor: 'rgba(28,24,20,0.22)' }}>
                Shop now
              </Link>
            </div>

            {/* 3 — Lora */}
            <div className="flex flex-col">
              <div className="overflow-hidden mb-7" style={{ background: '#EDE7DC' }}>
                <Image src={LORA_IMG} alt="Lora Statement Mirrored Waterfall Necklace"
                  width={480} height={600} className="w-full h-auto block" />
              </div>
              <p className={`${EYEBROW} mb-2`} style={{ fontSize: 10, color: '#A89478' }}>Best Sellers</p>
              <h3 className="font-sans font-medium m-0 mb-2 leading-[1.15]"
                style={{ fontSize: 22, color: '#1C1814' }}>
                Lora Waterfall<br />Mirrored Necklace
              </h3>
              <p className="font-light mb-5" style={{ fontSize: 13, color: '#A89478' }}>$220</p>
              <Link href="/product/lora-necklace" className={`${DISCOVER}`}
                style={{ color: '#1C1814', borderColor: 'rgba(28,24,20,0.22)' }}>
                Shop now
              </Link>
            </div>

          </div>
        </section>


        {/* ── 3. BEST SELLERS — image left, text right ── */}
        <section className="grid md:grid-cols-2 items-stretch"
          style={{ background: '#FFFFFF' }}>
          {/* image — natural portrait, no forced height */}
          <div className="relative overflow-hidden" style={{ background: '#DDD4C6' }}>
            <Image src={BEST_IMG} alt="Best Sellers"
              width={720} height={900}
              className="w-full h-auto object-cover object-top block"
              style={{ maxHeight: '85vh', objectFit: 'cover', objectPosition: 'top center' }} />
          </div>
          {/* text panel */}
          <div className="flex items-center px-6 py-12 sm:px-[8vw] sm:py-[80px]" style={{ background: '#FFFFFF' }}>
            <div className="max-w-[360px]">
              <p className={`${EYEBROW} mb-6`} style={{ color: '#B89350' }}>Collection</p>
              <h2 className="font-display font-light m-0 mb-5 leading-[1.04]"
                style={{ fontSize: 'clamp(34px, 4vw, 52px)', color: '#1C1814' }}>
                Best Sellers
              </h2>
              <p className="font-light leading-[1.9] mb-9"
                style={{ fontSize: 14, color: '#8C7E6C' }}>
                The pieces everyone reaches for — gold-filled everyday staples, hypoallergenic and made to be worn in the pool, the ocean, and everywhere in between.
              </p>
              <Link href="/shop?cat=Best+Sellers"
                className={`${DISCOVER}`}
                style={{ color: '#1C1814', borderColor: 'rgba(28,24,20,0.25)' }}>
                Shop now
              </Link>
            </div>
          </div>
        </section>


        {/* ── 4. ONE-OF-ONE — text left, image right ── */}
        <section className="grid md:grid-cols-2 items-stretch">
          {/* text panel */}
          <div className="flex items-center px-6 py-12 sm:px-[8vw] sm:py-[80px] order-2 md:order-1"
            style={{ background: '#F7F4EE' }}>
            <div className="max-w-[360px]">
              <p className={`${EYEBROW} mb-6`} style={{ color: '#B89350' }}>Rare &amp; handpicked</p>
              <h2 className="font-display font-light m-0 mb-5 leading-[1.04]"
                style={{ fontSize: 'clamp(34px, 4vw, 52px)', color: '#1C1814' }}>
                One-of-One
              </h2>
              <p className="font-light leading-[1.9] mb-9"
                style={{ fontSize: 14, color: '#8C7E6C' }}>
                Vintage Fendi, Gucci, YSL, Cartier — curated one-of-a-kind pieces sourced from around the world. Each one unique, each one unmistakable.
              </p>
              <Link href="/shop?cat=One-of-One"
                className={`${DISCOVER}`}
                style={{ color: '#1C1814', borderColor: 'rgba(28,24,20,0.25)' }}>
                Shop now
              </Link>
            </div>
          </div>
          {/* image */}
          <div className="relative overflow-hidden order-1 md:order-2"
            style={{ background: '#DDD4C6' }}>
            <Image src={ONE_IMG} alt="One-of-One"
              width={720} height={900}
              className="w-full h-auto block"
              style={{ maxHeight: '85vh', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </section>


        {/* ── 5. SPRING / SUMMER — image left, text right ── */}
        <section className="grid md:grid-cols-2 items-stretch">
          {/* image */}
          <div className="relative overflow-hidden" style={{ background: '#C8B8A4' }}>
            <Image src={LIFE_IMG} alt="Spring Summer lifestyle"
              width={720} height={900} quality={90}
              className="w-full h-auto block"
              style={{ maxHeight: '85vh', objectFit: 'cover', objectPosition: '60% 20%' }} />
          </div>
          {/* text */}
          <div className="flex items-center px-6 py-12 sm:px-[8vw] sm:py-[80px]"
            style={{ background: '#F7F4EE' }}>
            <div className="max-w-[360px]">
              <p className={`${EYEBROW} mb-6`} style={{ color: '#B89350' }}>Season</p>
              <h2 className="font-display font-light m-0 mb-5 leading-[1.04]"
                style={{ fontSize: 'clamp(34px, 4vw, 52px)', color: '#1C1814' }}>
                Spring /<br />Summer
              </h2>
              <p className="font-light leading-[1.9] mb-9"
                style={{ fontSize: 14, color: '#8C7E6C' }}>
                Turquoise, shell, coral and pearl — lightweight pieces made for long days and warm evenings.
              </p>
              <Link href="/shop?cat=Spring%2FSummer"
                className={`${DISCOVER}`}
                style={{ color: '#1C1814', borderColor: 'rgba(28,24,20,0.25)' }}>
                Shop now
              </Link>
            </div>
          </div>
        </section>


        {/* ── 6. STATEMENT — full-bleed horizontal, AI-extended image ── */}
        <section className="relative overflow-hidden"
          style={{ height: '70vh', minHeight: '480px', maxHeight: '800px', background: '#E8E0D4' }}>
          <Image src={STATEMENT_IMG} alt="Statement pieces" fill quality={90}
            className="object-cover"
            style={{ objectPosition: '50% 50%' }}
            sizes="100vw" />
          {/* left-side overlay for text legibility */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, rgba(28,24,20,0.58) 0%, rgba(28,24,20,0.15) 50%, rgba(28,24,20,0) 100%)'
          }} />
          <div className="absolute inset-0 flex items-center z-[3] px-[7vw]">
            <div className="max-w-[400px]">
              <p className={`${EYEBROW} mb-5`} style={{ color: 'rgba(253,248,240,0.60)' }}>Editorial</p>
              <h2 className="font-display font-light m-0 mb-5 leading-[0.96]"
                style={{ fontSize: 'clamp(48px, 5.5vw, 72px)', color: '#FDFAF6' }}>
                Statement
              </h2>
              <p className="font-light leading-[1.8] mb-9"
                style={{ fontSize: 14, color: 'rgba(253,248,240,0.60)', maxWidth: 320 }}>
                Pieces that arrive before you do — cascading waterfall necklaces, layered chokers, and mirrored statement drops made to be noticed.
              </p>
              <Link href="/shop?cat=Statement"
                className={`${DISCOVER}`}
                style={{ color: 'rgba(253,248,240,0.75)', borderColor: 'rgba(253,248,240,0.25)' }}>
                Shop now
              </Link>
            </div>
          </div>
        </section>


        {/* ── 7. SPRING/SUMMER image+text split ── */}
        <section className="grid md:grid-cols-2 items-stretch">
          {/* text */}
          <div className="flex items-center px-6 py-12 sm:px-[8vw] sm:py-[80px] order-2 md:order-1"
            style={{ background: '#FFFFFF' }}>
            <div className="max-w-[360px]">
              <p className={`${EYEBROW} mb-6`} style={{ color: '#B89350' }}>Our atelier</p>
              <h2 className="font-display font-light m-0 mb-5 leading-[1.04]"
                style={{ fontSize: 'clamp(34px, 4vw, 52px)', color: '#1C1814' }}>
                Every piece,<br />by hand
              </h2>
              <p className="font-light leading-[1.9] mb-4"
                style={{ fontSize: 14, color: '#8C7E6C' }}>
                Chosen and finished by hand in Los Angeles — gold-filled, hypoallergenic, waterproof, and tarnish-free.
              </p>
              <p className="font-light leading-[1.9] mb-9"
                style={{ fontSize: 14, color: '#8C7E6C' }}>
                Looking for something yours alone? We take custom orders and special sourcing requests.
              </p>
              <Link href="/sizing"
                className={`${DISCOVER}`}
                style={{ color: '#1C1814', borderColor: 'rgba(28,24,20,0.25)' }}>
                Custom orders
              </Link>
            </div>
          </div>
          {/* image */}
          <div className="relative overflow-hidden order-1 md:order-2"
            style={{ background: '#DDD4C6' }}>
            <Image src={SPRING_IMG} alt="Craftsmanship"
              width={720} height={900}
              className="w-full h-auto block"
              style={{ maxHeight: '92vh', objectFit: 'cover', objectPosition: 'top center' }} />
          </div>
        </section>


        {/* ── 8. QUOTE — warm cream, light ── */}
        <section className="py-[110px] px-8" style={{ background: '#F7F4EE' }}>
          <div className="max-w-[660px] mx-auto text-center">
            {/* thin gold ornament */}
            <div className="flex items-center gap-5 justify-center mb-11">
              <div className="h-px flex-1 max-w-[72px]" style={{ background: '#D4B87A' }} />
              <div className="w-1 h-1 rounded-full" style={{ background: '#C9A86A' }} />
              <div className="h-px flex-1 max-w-[72px]" style={{ background: '#D4B87A' }} />
            </div>
            <p className="font-display italic font-light m-0 mb-10 leading-[1.35]"
              style={{ fontSize: 'clamp(28px, 3vw, 38px)', color: '#2C2420' }}>
              &ldquo;It is important to us that you are the centre of our attention — that we accompany you thoroughly through the process of choosing your jewelry.&rdquo;
            </p>
            <div className="flex items-center gap-5 justify-center mb-9">
              <div className="h-px flex-1 max-w-[72px]" style={{ background: '#D4B87A' }} />
              <div className="w-1 h-1 rounded-full" style={{ background: '#C9A86A' }} />
              <div className="h-px flex-1 max-w-[72px]" style={{ background: '#D4B87A' }} />
            </div>
            <Link href="/contact"
              className={`${DISCOVER}`}
              style={{ color: '#8C7E6C', borderColor: 'rgba(140,126,108,0.30)' }}>
              Get in touch
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
