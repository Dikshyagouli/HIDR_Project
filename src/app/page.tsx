import React from 'react'
import HeroSlider from '@/components/layout/HeroSlider'
import RecentPublication from '@/components/RecentPublication'
import Footer from '@/components/layout/Footer'
import WhatWeOffer from '@/components/WhatWeOffer';
import RecentEvent from '@/components/RecentEvent';
import OurPublication from '@/components/OurPublication';

export default function HomePage() {
  return (
    <div className="w-full bg-white flex flex-col min-h-screen">
      {/* The main dynamic content stack */}
      <main className="flex-grow">
        <HeroSlider />
        <RecentPublication />
        <WhatWeOffer />
        <RecentEvent />
        <OurPublication />
      </main>

      <Footer />
    </div>
  )
}