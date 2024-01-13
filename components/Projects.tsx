import Person from '@/public/Person';
import Skill from './Skill';
import Link from 'next/link';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import AnimateLeftOnView from './framer/AnimateLeftOnView';
import AnimateRightOnView from './framer/AnimateRightOnView';
import AnimateShowOnView from './framer/AnimateShowOnView';
import ShrinkOnHover from './framer/ShrinkOnHover';

const roboto_bold = Roboto({ subsets: ['latin'], weight: ['500'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['100'] });

function Projects() {
  return (
    <div className="pt-20 relative text-primary flex flex-col">
      <div className="h-3 w-32 bg-secondary-muted mx-auto relative z-1 mb-24">
        <h2 className="text-5xl tracking-wider absolute -bottom-0 right-2 text-white">
          Projects
        </h2>
      </div>
          <div className="flex text-white tracking-wider relative mb-40 sm:mb-24">
          <AnimateLeftOnView>
            <div className="bg-primary w-[70vw] sm:w-[60vw] relative py-8 pr-4 sm:py-16 sm:pr-20 hover:shadow-md hover:shadow-secondary">
              <Image
                src="/exitmap.png"
                alt="exitmap"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '95%', height: 'auto' }}
              />
              <AnimateShowOnView>
                <div
                  className={`${roboto_bold.className} flex flex-col gap-1 sm:gap-4 absolute top-0 -right-24 sm:top-12 sm:-right-80 bg-background/90 sm:bg-background/30 p-4 rounded w-64 sm:w-96`}>
                  <h3 className="text-3xl sm:text-4xl">Exitmap</h3>
                  <h4 className="text-lg sm:text-2xl mb-2">
                    BASE Jumping Database
                  </h4>
                  <p className={`${roboto.className} text-xs sm:text-lg mb-4`}>
                    Full stack database application built with React, Node.js,
                    Express.js. PostgreSQL, Redis, and AWS S3.
                  </p>
                  <Link
                    href={'http://www.exit-map.com'}
                    className="uppercase border-b-2 border-b-secondary hover:text-black hover:bg-secondary pl-2 pt-1 hover:rounded transition">
                    <p>Live App</p>
                  </Link>
                  <Link
                    href={'https://github.com/jacksonboyett/exitmap-v2'}
                    className="uppercase border-b-2 border-b-secondary hover:text-black hover:bg-secondary pl-2 pt-1 hover:rounded transition">
                    <p>Learn More</p>
                  </Link>
                </div>
              </AnimateShowOnView>
            </div>
            </AnimateLeftOnView>
          </div>


      <div className="flex text-white tracking-wider relative ml-auto">
        <AnimateRightOnView>
          <div className="bg-primary w-[70vw] sm:w-[60vw] relative py-8 pl-4 sm:py-16 sm:pl-16 hover:shadow-md hover:shadow-secondary">
            <Image
              src="/worldview.png"
              alt="exitmap"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '95%', height: 'auto' }}
              className="ml-auto"
            />
            <AnimateShowOnView>
              <div
                className={`${roboto_bold.className} flex flex-col gap-1 sm:gap-4 absolute top-0 -left-24 sm:top-12 sm:-left-80 bg-background/90 sm:bg-background/30 p-4 rounded w-64 sm:w-96`}>
                <h3 className="text-3xl sm:text-4xl">
                  Worldview
                </h3>
                <h4 className="text-lg sm:text-2xl mb-2">
                  World Development Indicators Visualizer
                </h4>
                <p className={`${roboto.className} text-xs sm:text-lg mb-4`}>
                  Full stack database application build with Next.js, Prisma,
                  PlanetScale, ClerkAuth, Stripe, and OpenAI.
                </p>
                <Link
                  href={'http://worldview-three.vercel.app'}
                  className="uppercase border-b-2 border-b-secondary hover:text-black hover:bg-secondary pl-2 pt-1 hover:rounded transition">
                  <p>Live App</p>
                </Link>
                <Link
                  href={'https://github.com/jacksonboyett/worldview'}
                  className="uppercase border-b-2 border-b-secondary hover:text-black hover:bg-secondary pl-2 pt-1 hover:rounded transition">
                  <p>Learn More</p>
                </Link>
              </div>
            </AnimateShowOnView>
          </div>
        </AnimateRightOnView>
      </div>
    </div>
  );
}

export default Projects;
