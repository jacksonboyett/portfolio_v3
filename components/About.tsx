import Person from '@/public/Person';
import Skill from './Skill';
import Image from 'next/image';
import IconPersonOutline from '@/public/IconPersonOutline';

const skills = [
  {
    src: '/react.png',
    alt: 'react logo',
    bg: 'bg-[#222222]',
    name: 'ReactJS'
  },
  {
    src: '/tailwind.png',
    alt: 'tailwind logo',
    bg: 'bg-[#202635]',
    name: 'Tailwind'
  },
  {
    src: '/next.png',
    alt: 'next logo',
    bg: 'bg-[#ffffff]',
    name: 'NextJS'
  },
  {
    src: '/js.png',
    alt: 'javascript logo',
    bg: 'bg-[#d2bc4d]',
    name: 'Javascript'
  },
  {
    src: '/ts.png',
    alt: 'typescript logo',
    bg: 'bg-[#2c3951]',
    name: 'Typescript'
  },
  {
    src: '/sql.png',
    alt: 'sql logo',
    bg: 'bg-[#222222]',
    name: 'SQL'
  },
  {
    src: '/express.png',
    alt: 'express logo',
    bg: 'bg-[#ffffff]',
    name: 'ExpressJS'
  },
  {
    src: '/node.png',
    alt: 'node logo',
    bg: 'bg-[#222222]',
    name: 'NodeJS'
  },
];

function About() {
  return (
    <div className="h-screen pt-20 relative text-primary">
      <div className="h-3 w-32 bg-primary mx-auto relative z-1 mb-24">
        <h2 className="text-5xl font-extrabold tracking-wider absolute -bottom-0 right-2 text-white">
          About
        </h2>
      </div>
      <div className="bg-background flex justify-center gap-24">
        <div className="flex flex-col items-center gap-4">
          <IconPersonOutline/>
          <p className="text-white w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            dictum, eros non aliquet sagittis, ante sem facilisis sapien, sed
            venenatis dolor est eget libero. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Etiam id
            dignissim turpis. Sed dignissim est sed lectus dapibus ultricies.{' '}
          </p>
        </div>
        <div className="flex gap-6 flex-wrap w-96 justify-center">
          {skills.map((skill) => (
            <Skill key={skill.name} src={skill.src} alt={skill.alt} bg={skill.bg} name={skill.name}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
