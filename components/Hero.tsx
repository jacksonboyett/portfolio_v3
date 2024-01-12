import { ArrowDown } from 'lucide-react';
import AnimateDownOnView from './framer/AnimateDownOnView';
import AnimateUpOnView from './framer/AnimateUpOnView';
import AnimateUpOnViewWithDelay from './framer/AnimateUpOnViewWithDelay';
import { Button } from './ui/button';
import { MutableRefObject } from 'react';
import Particles from '@tsparticles/react';
import ParticlesContainer from './particles/ParticlesContainer';
import AnimateShowOnView from './framer/AnimateShowOnView';

interface HeroProps {
  executeScroll: (ref: MutableRefObject<HTMLDivElement>) => void;
  about: MutableRefObject<HTMLDivElement>;
}

function Hero({ executeScroll, about }: HeroProps) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center relative">
      <AnimateDownOnView>
        <h1 className="text-3xl sm:text-5xl tracking-wider text-secondary">
          I am <span className="text-primary">Jackson Boyett</span>
        </h1>
      </AnimateDownOnView>
      <AnimateUpOnView>
        <h2 className="text-secondary text-2xl sm:text-4xl tracking-wider mt-4">
          - full stack web developer -
        </h2>
      </AnimateUpOnView>
      <AnimateUpOnViewWithDelay>
        <Button
          variant={'primary_outline'}
          className="mt-8 text-lg tracking-wide px-8"
          onClick={() => executeScroll(about)}>
          View my work
          <ArrowDown className="ml-4" />
        </Button>
      </AnimateUpOnViewWithDelay>
      <ParticlesContainer />
    </div>
  );
}

export default Hero;
