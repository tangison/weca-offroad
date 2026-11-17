import { NextResponse } from "next/server";
import { services, galleryItems, brands, products } from "@/lib/data";

/**
 * GET /api
 *
 * Lightweight site manifest endpoint.
 *
 * Useful for:
 *   - external integrations that need to know what content is available
 *   - a sanity check that the deployment is live
 *   - integration tests
 *
 * Returns a small JSON payload describing the site. Does NOT expose
 * contact details, business info, or anything that could be used for
 * spam harvesting. Use the contact page for that.
 *
 * The real catalog is live (2026-10-14): `products` is counted again per
 * the original instruction to re-add it once the real catalog arrived.
 */
export async function GET() {
  return NextResponse.json(
    {
      site: "Weca Offroad Centre",
      locale: "en_NA",
      location: "Swakopmund, Namibia",
      catalogStatus: "live",
      counts: {
        products: products.length,
        services: services.length,
        galleryItems: galleryItems.length,
        brands: brands.length,
      },
      lastUpdated: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    },
  );
}
