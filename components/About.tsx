import Person from '@/public/Person';
import Skill from './Skill';
import Image from 'next/image';
import IconPersonOutline from '@/public/IconPersonOutline';
import AnimateLeftOnView from './framer/AnimateLeftOnView';
import AnimateRightOnViewStagger from './framer/AnimateRightOnViewStagger';
import ParticlesContainer from './particles/ParticlesContainer';

const skills = [
  {
    src: '/react.png',
    alt: 'react logo',
    bg: 'bg-[#222222]',
    name: 'ReactJS',
  },
  {
    src: '/tailwind.png',
    alt: 'tailwind logo',
    bg: 'bg-[#202635]',
    name: 'Tailwind',
  },
  {
    src: '/next.png',
    alt: 'next logo',
    bg: 'bg-[#ffffff]',
    name: 'NextJS',
  },
  {
    src: '/js.png',
    alt: 'javascript logo',
    bg: 'bg-[#d2bc4d]',
    name: 'Javascript',
  },
  {
    src: '/ts.png',
    alt: 'typescript logo',
    bg: 'bg-[#2c3951]',
    name: 'Typescript',
  },
  {
    src: '/sql.png',
    alt: 'sql logo',
    bg: 'bg-[#222222]',
    name: 'SQL',
  },
  {
    src: '/express.png',
    alt: 'express logo',
    bg: 'bg-[#ffffff]',
    name: 'ExpressJS',
  },
  {
    src: '/node.png',
    alt: 'node logo',
    bg: 'bg-[#222222]',
    name: 'NodeJS',
  },
];

function About() {
  return (
    <section className="pt-20 relative text-primary mb-24">
      <div className="h-3 w-32 bg-primary mx-auto relative z-1 mb-12">
        <h2 className="text-5xl font-extrabold tracking-wider absolute -bottom-0 right-2 text-white">
          About
        </h2>
      </div>
      <div className="bg-background justify-center gap-24 flex flex-col items-center px-2 sm:px-0 lg:flex-row">
        <AnimateLeftOnView>
        <div className="flex flex-col items-center gap-4 text-center sm:text-left">
          <IconPersonOutline />
          <p className="text-white sm:w-[30rem]">
            I am a highly motivated, hands-on Web Developer with an education
            background in Mechanical Engineering. I have extensive leadership
            experience as a U.S. Army Officer planning operations for hundreds
            of individuals and managing over $600 million worth of U.S. defense
            assets.{' '}
          </p>
          <p className="text-white sm:w-[30rem]">
            It is my dream to become a full-time remote web developer. I began
            learning web development while on deployment to Poland. During that
            time, I worked intense daily 12-hour shifts, and only during my free
            time could I learn how to code. After years of learning, I am ready to enter the industry. {' '}
          </p>
        </div>
        </AnimateLeftOnView>
        <div className="flex gap-6 flex-wrap w-96 justify-center">
          {skills.map((skill) => (
            <AnimateRightOnViewStagger key={skill.name}>
            <Skill
              src={skill.src}
              alt={skill.alt}
              bg={skill.bg}
              name={skill.name}
            />
            </AnimateRightOnViewStagger>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
