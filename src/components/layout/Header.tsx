import React from 'react'
import Navbar from './Navbar'
import HeroSlider from './HeroSlider';
import RecentPublication from '../RecentPublication';
import Footer from './Footer';

export default function Header() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <HeroSlider />
      <RecentPublication />
      <Footer />
    </div>
  )
}
