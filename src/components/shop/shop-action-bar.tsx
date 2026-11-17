'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { MessageCircle, Phone, FileText } from 'lucide-react';
import { businessInfo } from '@/lib/data';

/**
 * ShopActionBar - THE BAR: a persistent action bar pinned to the bottom of
 * the viewport on /shop routes (desktop and mobile).
 *
 * Owner request (2026-10-14, item 5): make the shop bar a fixed, always-
 * visible quote/WhatsApp/Call strip on the shop page. The reference image
 * the owner mentioned was not received, so this bar follows the site's own
 * design system exactly (dark #1A1A1A, square corners, Rajdhani uppercase,
 * orange primary, WhatsApp green for the WhatsApp action). It can be
 * restyled pixel-for-pixel to the reference later without moving anything.
 *
 * Buttons:
 *   - Get a Quote: scrolls to the on-page quote widget (#quote).
 *   - WhatsApp: opens a chat with the shop team (real number only).
 *   - Call: click-to-call on the primary mobile number.
 *
 * Stacking: z-[45] sits above ScrollToTop (z-40) and below the mobile
 * filter drawer / product dialog (z-50). ScrollToTop shifts up on /shop so
 * the two never overlap. Safe-area padding keeps it clear of the iOS home
 * indicator.
 */
export function ShopActionBar() {
  const pathname = usePathname();
  if (!pathname?.startsWith('/shop')) return null;

  const whatsappHref = `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Hi Weca Offroad! I have a question about your shop.'
  )}`;
  const phoneHref = `tel:${businessInfo.phone[0].replace(/\s/g, '')}`;

  return (
    <motion.div
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="fixed bottom-0 left-0 right-0 z-[45] bg-[#1A1A1A]/98 backdrop-blur-sm border-t border-[#2A2A2A]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      role="navigation"
      aria-label="Shop quick actions"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-2.5">
          {/* Assurance line - desktop only */}
          <p className="hidden lg:block text-muted-foreground text-xs font-accent uppercase tracking-wider">
            Can&apos;t find it? We&apos;ll source it. <span className="text-[#E67E22]">Price match guarantee.</span>
          </p>

          <div className="flex flex-1 lg:flex-none items-center gap-2">
            <a
              href="#quote"
              className="btn-pill flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-[#E67E22] hover:bg-[#F39C12] text-[#0D0D0D] font-accent font-semibold uppercase tracking-wider text-xs md:text-sm px-4 md:px-6 py-3 transition-colors"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              Get a Quote
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5A] text-[#0D0D0D] font-accent font-semibold uppercase tracking-wider text-xs md:text-sm px-4 md:px-6 py-3 transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span className="sm:inline">WhatsApp</span>
            </a>
            <a
              href={phoneHref}
              className="btn-pill flex-1 lg:flex-none inline-flex items-center justify-center gap-2 border border-[#2A2A2A] hover:border-[#E67E22] text-[#F5F5F5] font-accent font-semibold uppercase tracking-wider text-xs md:text-sm px-4 md:px-6 py-3 transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="hidden xs:inline sm:inline">Call</span>
              <span className="hidden xl:inline">{businessInfo.phone[0]}</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
