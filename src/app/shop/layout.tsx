import { Metadata } from 'next';
import { Suspense } from 'react';
import { BreadcrumbStructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Shop 4x4 Accessories | Weca Offroad Namibia',
  description:
    'Rooftop tents, suspension, bumpers, canopies, awnings, seat covers, winches, fridges and power from the brands Namibia trusts. Every price POA: quote via WhatsApp.',
  openGraph: {
    title: 'Shop 4x4 Accessories | Weca Offroad Namibia',
    description:
      'Browse the real Weca Offroad catalog. Every price POA: pick what you need and request an instant quote on WhatsApp.',
  },
  alternates: {
    canonical: '/shop',
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: '/' },
          { name: 'Shop', url: '/shop' },
        ]}
      />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
}
