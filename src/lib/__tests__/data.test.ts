import { describe, it, expect } from "vitest";
import { products, services, galleryItems, testimonials, brands, heroSlides, shopCategories, productCategories } from "@/lib/data";
import { siteConfig } from "@/lib/config";

/**
 * Data integrity tests.
 *
 * Verify that the static data files are well-formed and consistent.
 * These tests catch common content-entry mistakes before deployment.
 */

describe("products", () => {
  // Real catalog policy (owner, 2026-10-14): products come ONLY from the
  // owner's handwritten SA supplier list + the client-confirmed brand list.
  // Every price is POA. No fabricated SKUs, no estimated prices.
  const ALLOWED_BRANDS = new Set([
    // Client-confirmed site brands (src/lib/config.ts)
    "Wildog", "GOBI X", "Gobi-X", "Ratel", "Dometic", "Tentco", "Howling Moon",
    "Fox", "Tough Dog", "EFS", "EcoFlow", "Runva", "WARN", "Moremi", "AluBlack",
    "Fredlin Hoists", "DeGraaf Exhausts", "Tougher", "Beesdam", "Escape Gear", "Rockford",
    // Owner handwritten SA supplier list (IMG_7143) + their house brands
    "Rhinoman", "Onca Offroad", "MCC", "Piak", "Lightforce", "Profender",
    "AmadaXtreme", "D.A.G", "Flated", "Front Runner", "Induna 4x4",
    "Furnlock & Slide", "Eezi Slide", "The 4x4 Store", "MAXE",
    "Africa Longhorn", "Quick Pitch", "Summit 4x4",
  ]);

  it("has at least one product", () => {
    expect(products.length).toBeGreaterThan(0);
  });

  it("has the full owner-approved catalog (50+ products)", () => {
    expect(products.length).toBeGreaterThanOrEqual(50);
  });

  it("every product is POA (Price on Request)", () => {
    for (const p of products) {
      expect(p.price).toBe("POA");
    }
  });

  it("every product brand is on the owner-approved brand list", () => {
    for (const p of products) {
      expect(ALLOWED_BRANDS.has(p.brand)).toBe(true);
    }
  });

  it("each product has required fields", () => {
    for (const p of products) {
      expect(p.id).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.brand).toBeTruthy();
      expect(p.category).toBeTruthy();
      expect(p.price).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(Array.isArray(p.features)).toBe(true);
      expect(p.features.length).toBeGreaterThan(0);
      expect(p.image).toMatch(/^\/images\//);
      expect(p.image).toMatch(/\.webp$/);
      expect(typeof p.inStock).toBe("boolean");
    }
  });

  it("product ids are unique", () => {
    const ids = products.map((p) => p.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it("all product categories exist in productCategories", () => {
    const validCategoryIds = new Set(productCategories.map((c) => c.id));
    for (const p of products) {
      expect(validCategoryIds.has(p.category)).toBe(true);
    }
  });
});

describe("services", () => {
  it("has at least one service", () => {
    expect(services.length).toBeGreaterThan(0);
  });

  it("each service has required fields", () => {
    for (const s of services) {
      expect(s.id).toBeTruthy();
      expect(s.name).toBeTruthy();
    }
  });
});

describe("gallery", () => {
  it("has at least one item", () => {
    expect(galleryItems.length).toBeGreaterThan(0);
  });

  it("each gallery item references a webp image", () => {
    for (const g of galleryItems) {
      expect(g.image).toMatch(/^\/images\//);
      expect(g.image).toMatch(/\.webp$/);
    }
  });

  it("gallery ids are unique", () => {
    const ids = galleryItems.map((g) => g.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });
});

describe("testimonials", () => {
  it("has at least one testimonial", () => {
    expect(testimonials.length).toBeGreaterThan(0);
  });
});

describe("brands", () => {
  it("has at least one brand", () => {
    expect(brands.length).toBeGreaterThan(0);
  });

  it("each brand has a name, logo, and description", () => {
    for (const b of brands) {
      expect(b.name).toBeTruthy();
      expect(b.logo).toBeTruthy();
      expect(b.description).toBeTruthy();
    }
  });
});

describe("heroSlides", () => {
  it("has at least one slide", () => {
    expect(heroSlides.length).toBeGreaterThan(0);
  });

  it("each slide references a webp image via src", () => {
    for (const s of heroSlides) {
      expect(s.src).toMatch(/^\/images\//);
      expect(s.src).toMatch(/\.webp$/);
      expect(s.alt).toBeTruthy();
    }
  });
});

describe("categories", () => {
  it("shopCategories has at least one entry", () => {
    expect(shopCategories.length).toBeGreaterThan(0);
  });

  it("productCategories has at least one entry", () => {
    expect(productCategories.length).toBeGreaterThan(0);
  });
});

describe("siteConfig", () => {
  it("has a name", () => {
    expect(siteConfig.name).toBeTruthy();
  });

  it("has a domain", () => {
    expect(siteConfig.domain).toMatch(/^https:\/\//);
  });

  it("has contact information", () => {
    expect(siteConfig.contact.email).toMatch(/@/);
    expect(siteConfig.contact.phone.length).toBeGreaterThan(0);
    expect(siteConfig.contact.whatsapp).toBeTruthy();
  });

  it("has business hours", () => {
    expect(siteConfig.hours.weekdays).toBeTruthy();
    expect(siteConfig.hours.saturday).toBeTruthy();
  });

  it("has at least one social link", () => {
    expect(siteConfig.social.facebook || siteConfig.social.instagram || siteConfig.social.tiktok).toBeTruthy();
  });
});
