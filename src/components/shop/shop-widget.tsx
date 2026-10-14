import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products, shopCategories } from '@/lib/data';

/**
 * ShopWidget - the shop teaser panel on the Home page.
 *
 * Replaces the previous "Catalog Coming Soon" section (client instruction,
 * 2026-10-14: the real catalog is live). Shows four featured products from
 * the owner-approved catalog plus the category shortcuts into /shop.
 * Every price is POA; the cards route to the catalog, not to a checkout.
 *
 * Featured products are hand-picked cards that carry a brand-matched
 * dealer-sourced photo (see PROOF.md provenance note).
 */
const FEATURED_IDS = [
  'wildog-hunter-front-bumper',
  'howling-moon-tourer-rtt',
  'fox-20-performance-shock',
  'ecoflow-delta-power-station',
];

export function ShopWidget() {
  const featured = FEATURED_IDS.map((id) => products.find((p) => p.id === id)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  );

  return (
    <section aria-label="Shop preview" className="py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#E67E22] text-[10px] uppercase tracking-[0.25em] font-accent mb-2">
              The Weca Shop
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#F5F5F5] tracking-tight">
              Real Products. Personal Quotes.
            </h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-xl">
              Browse the brands we carry and the gear we fit. Every price is
              POA: message us and we quote you on the spot, price match
              guarantee behind it.
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden md:inline-flex items-center text-[#E67E22] hover:text-[#F5F5F5] text-sm font-accent uppercase tracking-wider transition-colors"
          >
            View Full Catalog <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* Featured products - all carry the POA promise */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product) => (
            <Link key={product.id} href={`/shop?category=${product.category}`} className="group">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E67E22] transition-colors overflow-hidden h-full">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (max-width: 640px) 50vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[#E67E22] text-[10px] md:text-xs font-accent uppercase tracking-wider mb-1">
                    {product.brand}
                  </p>
                  <h3 className="text-[#F5F5F5] font-medium text-xs md:text-sm mb-2 line-clamp-2 group-hover:text-[#E67E22] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[#E67E22] font-accent font-semibold text-sm md:text-base">
                    POA
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Category shortcuts */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {shopCategories.slice(0, 8).map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-muted-foreground hover:text-[#F5F5F5] hover:border-[#E67E22] transition-colors font-accent uppercase tracking-wider text-xs"
            >
              {category.name}
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <Link
            href="/shop"
            className="btn-pill inline-flex items-center justify-center bg-[#E67E22] hover:bg-[#F39C12] text-[#0D0D0D] font-accent font-semibold uppercase tracking-wider text-sm px-8 py-4 transition-colors"
          >
            View Full Catalog <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
