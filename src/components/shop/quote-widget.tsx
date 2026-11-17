'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { products, productCategories, businessInfo } from '@/lib/data';

/**
 * QuoteWidget - the quote request panel used on /shop and on the Home page.
 *
 * Owner policy (2026-10-14): every product is POA (Price on Request). There
 * is no cart and no checkout; the quote IS the sale, so this widget makes
 * that step effortless:
 *   1. Pick a product (optional) and tell us the vehicle.
 *   2. One tap opens WhatsApp with the details pre-typed.
 * Nothing is stored server-side; the WhatsApp deep link carries the message.
 * Phone number comes from businessInfo (real, client-confirmed data only).
 */
export function QuoteWidget() {
  const [productId, setProductId] = useState<string>('none');
  const [vehicle, setVehicle] = useState('');
  const [notes, setNotes] = useState('');

  const grouped = useMemo(() => {
    return productCategories
      .filter((c) => c.id !== 'all' && products.some((p) => p.category === c.id))
      .map((c) => ({
        id: c.id,
        name: c.name,
        items: products.filter((p) => p.category === c.id),
      }));
  }, []);

  const selectedProduct = products.find((p) => p.id === productId);

  const whatsappHref = useMemo(() => {
    const lines = ['Hi Weca Offroad! I would like a quote.'];
    lines.push(selectedProduct ? `Product: ${selectedProduct.name}` : 'Product: General enquiry');
    lines.push(`Vehicle: ${vehicle.trim() || 'Not specified yet'}`);
    if (notes.trim()) lines.push(`Details: ${notes.trim()}`);
    lines.push('(Prices are POA: please send me a formal quote.)');
    return `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
      lines.join('\n')
    )}`;
  }, [productId, vehicle, notes, selectedProduct]);

  return (
    <section id="quote" aria-label="Request a quote" className="py-16 md:py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-[#E67E22] text-[10px] uppercase tracking-[0.25em] font-accent mb-3">
            POA: Price on Request
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-[#F5F5F5] tracking-tight mb-3">
            Request a Quote
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body">
            Tell us what you need and we come back to you with a formal quote.
            No guessed prices, no online checkout: every quote is personal and
            our price match guarantee sits behind it.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-[#0D0D0D] border border-[#2A2A2A] p-6 md:p-8">
          <div className="space-y-5">
            {/* Product picker */}
            <div>
              <label
                htmlFor="quote-product"
                className="block font-accent text-[#F5F5F5] uppercase tracking-wider text-xs mb-2"
              >
                Product
              </label>
              <Select value={productId} onValueChange={setProductId}>
                <SelectTrigger
                  id="quote-product"
                  className="w-full bg-[#1A1A1A] border-[#2A2A2A] text-[#F5F5F5]"
                >
                  <SelectValue placeholder="Choose a product (optional)" />
                </SelectTrigger>
                <SelectContent className="bg-[#1A1A1A] border-[#2A2A2A] max-h-72">
                  <SelectItem value="none" className="text-[#F5F5F5]">
                    General enquiry
                  </SelectItem>
                  {grouped.map((group) => (
                    <SelectGroup key={group.id}>
                      <SelectLabel className="text-[#E67E22] text-[10px] uppercase tracking-wider">
                        {group.name}
                      </SelectLabel>
                      {group.items.map((p) => (
                        <SelectItem
                          key={p.id}
                          value={p.id}
                          className="text-[#F5F5F5] hover:bg-[#2A2A2A]"
                        >
                          {p.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Vehicle */}
            <div>
              <label
                htmlFor="quote-vehicle"
                className="block font-accent text-[#F5F5F5] uppercase tracking-wider text-xs mb-2"
              >
                Your vehicle
              </label>
              <Input
                id="quote-vehicle"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                placeholder="e.g. 2021 Hilux 2.8 GD-6 double cab"
                className="bg-[#1A1A1A] border-[#2A2A2A] text-[#F5F5F5] placeholder:text-[#666] focus:border-[#E67E22]"
              />
            </div>

            {/* Notes */}
            <div>
              <label
                htmlFor="quote-notes"
                className="block font-accent text-[#F5F5F5] uppercase tracking-wider text-xs mb-2"
              >
                Anything else? (optional)
              </label>
              <Textarea
                id="quote-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Load, lift, timelines, trade-in questions, anything that helps us quote right."
                rows={3}
                className="bg-[#1A1A1A] border-[#2A2A2A] text-[#F5F5F5] placeholder:text-[#666] focus:border-[#E67E22] resize-none"
              />
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#1EBE5A] text-[#0D0D0D] font-accent font-semibold uppercase tracking-wider"
            >
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Send Quote Request on WhatsApp
              </a>
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 pt-1">
              <span className="inline-flex items-center gap-1.5 text-muted-foreground text-[11px] font-body">
                <Clock className="w-3.5 h-3.5 text-[#E67E22]" />
                Mon - Fri {businessInfo.hours.weekdays} · Sat {businessInfo.hours.saturday}
              </span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground text-[11px] font-body">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E67E22]" />
                We beat any written quotation in Namibia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
