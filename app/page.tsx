'use client';

import About from '@/components/About';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { MutableRefObject, useRef } from 'react';

export default function Home() {
  const about = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

  const executeScroll = (ref: MutableRefObject<HTMLDivElement>) => {
    ref.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <main className="relative">
      <Hero executeScroll={executeScroll} about={about}/>
      <Navbar />
      <div ref={about}>
        <About />
      </div>
    </main>
  );
}
