'use client';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import { MutableRefObject, useRef } from 'react';

export default function Home() {
  const home = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
  const about = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
  const projects = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

  const executeScroll = (ref: MutableRefObject<HTMLDivElement>) => {
    const offset = -50;
    const yElement = ref.current.getBoundingClientRect().top;
    const y = yElement + window.scrollY + offset;
    window.scrollTo({top: y, behavior: "smooth"})
  }

  return (
    <main className="relative">
      <div className='relative' ref={home}>
      <Hero executeScroll={executeScroll} about={about}/>
      </div>
      <Navbar executeScroll={executeScroll} projects={projects} about={about} home={home}/>
      <div ref={about}>
        <About />
      </div>
      <div ref={projects}>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
    </main>
  );
}
