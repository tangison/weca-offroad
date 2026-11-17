'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { businessInfo } from '@/lib/data';

/**
 * StickyContactBar - slim Call + WhatsApp strip that lives INSIDE the fixed
 * header (below the nav row) and stays visible while scrolling, desktop and
 * mobile (owner request, 2026-10-14, item 6).
 *
 * Behavior: it appears once the visitor scrolls (the navbar already tracks
 * that state and passes it in as `visible`). At the very top of the page the
 * hero reads clean and untouched - zero layout shift, no new offsets on any
 * existing page - and the moment the visitor scrolls, the bar is there for
 * the rest of the visit, exactly like the fixed header it sits in.
 *
 * Numbers: businessInfo only (real, client-confirmed). Call = primary mobile
 * (+264 81 169 1942), WhatsApp = the same number, which BUSINESS_INFO.md
 * lists as the WhatsApp line. tel: and wa.me links, +264 format.
 */
export function StickyContactBar({ visible }: { visible: boolean }) {
  if (!visible) return null;

  const phoneHref = `tel:${businessInfo.phone[0].replace(/\s/g, '')}`;
  const whatsappHref = `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}`;

  return (
    <div className="bg-[#141414] border-t border-[#2A2A2A]">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className="flex items-center justify-between gap-3 py-1.5"
          style={{ paddingBottom: 'max(0.375rem, 0px)' }}
        >
          {/* Hours / location line - desktop only */}
          <p className="hidden md:block text-muted-foreground text-[11px] font-accent uppercase tracking-wider truncate">
            Mon - Fri {businessInfo.hours.weekdays} · Sat {businessInfo.hours.saturday} · Swakopmund
          </p>
          <p className="md:hidden text-muted-foreground text-[10px] font-accent uppercase tracking-wider truncate">
            Swakopmund
          </p>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-1.5 text-[#F5F5F5] hover:text-[#E67E22] transition-colors text-xs font-accent font-semibold uppercase tracking-wider"
              aria-label={`Call Weca Offroad on ${businessInfo.phone[0]}`}
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">{businessInfo.phone[0]}</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-[#1EBE5A] transition-colors text-xs font-accent font-semibold uppercase tracking-wider"
              aria-label="Message Weca Offroad on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
