import { sanityClient } from './sanity.client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
type SanityImageSource = Parameters<typeof builder.image>[0];

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface SanityProduct {
  _id: string;
  name: string;
  slug: { current: string };
  price: number;
  categories: string[];
  images: SanityImageSource[];
  description?: string;
  inStock: boolean;
  featured: boolean;
  stripePriceId?: string;
}

export async function getAllProducts(): Promise<SanityProduct[]> {
  return sanityClient.fetch(
    `*[_type == "product"] | order(_createdAt desc) {
      _id, name, slug, price, categories, images, description, inStock, featured, stripePriceId
    }`
  );
}

export async function getProductBySlug(slug: string): Promise<SanityProduct | null> {
  return sanityClient.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id, name, slug, price, categories, images, description, inStock, featured, stripePriceId
    }`,
    { slug }
  );
}

export async function getFeaturedProducts(): Promise<SanityProduct[]> {
  return sanityClient.fetch(
    `*[_type == "product" && featured == true] | order(_createdAt desc) {
      _id, name, slug, price, categories, images, description, inStock, featured, stripePriceId
    }`
  );
}
