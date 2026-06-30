import Image from 'next/image';
import Link from 'next/link';
import { Product, formatPrice } from '@/lib/catalog';

interface Props {
  product: Product;
  aspectRatio?: string;
}

export default function ProductCard({ product, aspectRatio = 'aspect-[3/4]' }: Props) {
  const price = formatPrice(product.price);

  return (
    <Link href={`/product/${product.slug}`} className="block group no-underline">
      <div className={`${aspectRatio} relative overflow-hidden rounded-lg bg-[#e7ded2] mb-4`}>
        {product.img ? (
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-sand-300">
            <span className="text-ink-400 text-sm font-sans">No image</span>
          </div>
        )}
        {product.soldout && (
          <span className="absolute top-3 left-3 bg-ink-900/80 text-ivory-50 text-[9px] font-semibold uppercase tracking-[0.16em] px-[10px] py-[5px] rounded-sm">
            Sold out
          </span>
        )}
      </div>
      <div className="text-center">
        <div className="font-sans text-[15px] font-medium text-ink-900 leading-[1.25] mb-[4px] group-hover:text-gold-600 transition-colors duration-300">{product.name}</div>
        <div className="font-sans text-[13px] text-ink-500">{price}</div>
      </div>
    </Link>
  );
}
