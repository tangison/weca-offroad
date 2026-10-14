'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle } from 'lucide-react';
import { businessInfo } from '@/lib/data';

/**
 * FloatingContact - site-wide floating Call + WhatsApp buttons (owner
 * request, 2026-10-14, item 7: visitors can call or WhatsApp from any page).
 *
 * Placement: bottom-right, stacked ABOVE the ScrollToTop button (which owns
 * the bottom corner after one viewport of scroll). Insets match ScrollToTop
 * (right-6 md:right-8) so the three buttons read as one tidy column:
 *   [Call] [WhatsApp] [Scroll to top]
 *
 * On /shop routes this component renders nothing: THE BAR (ShopActionBar)
 * already carries Quote / WhatsApp / Call persistently there, and stacking
 * both would duplicate the same two actions in one viewport.
 *
 * Square corners: the site enforces square corners globally (globals.css),
 * so these match the site's brutalist button language instead of the usual
 * round chat bubbles.
 */
export function FloatingContact() {
  const pathname = usePathname();
  if (pathname?.startsWith('/shop')) return null;

  const phoneHref = `tel:${businessInfo.phone[0].replace(/\s/g, '')}`;
  const whatsappHref = `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Hi Weca Offroad!'
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="fixed right-6 md:right-8 bottom-[4.75rem] md:bottom-24 z-40 flex flex-col gap-2 items-end"
      role="navigation"
      aria-label="Contact quick actions"
    >
      {/* WhatsApp - the primary channel */}
      <div className="group relative">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message Weca Offroad on WhatsApp"
          className="flex items-center justify-center h-12 w-12 bg-[#25D366] hover:bg-[#1EBE5A] text-[#0D0D0D] shadow-lg transition-colors"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
        </a>
        <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1A1A1A] border border-[#2A2A2A] px-2.5 py-1 text-[11px] font-accent uppercase tracking-wider text-[#F5F5F5] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp us
        </span>
      </div>

      {/* Click-to-call */}
      <div className="group relative">
        <a
          href={phoneHref}
          aria-label={`Call Weca Offroad on ${businessInfo.phone[0]}`}
          className="flex items-center justify-center h-12 w-12 bg-[#E67E22] hover:bg-[#F39C12] text-[#0D0D0D] shadow-lg transition-colors"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
        </a>
        <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1A1A1A] border border-[#2A2A2A] px-2.5 py-1 text-[11px] font-accent uppercase tracking-wider text-[#F5F5F5] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {businessInfo.phone[0]}
        </span>
      </div>
    </motion.div>
  );
}
