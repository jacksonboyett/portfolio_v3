import Image from 'next/image';
import { cn } from '@/lib/utils';

interface SkillProps {
	src: string,
	alt: string, 
	bg: string,
	name: string
}

function Skill({src, alt, bg, name}: SkillProps) {
  return (
    <div className={cn('h-24 w-24 flex items-center justify-center relative rounded', bg)}>
      <Image src={src} alt={alt} width={60} height={60} />
			<div className='bg-white h-full w-full absolute opacity-0 hover:opacity-70 transition flex justify-end rounded'>
				<p className='mt-auto mr-1 text-black font-black text-xl'>{name}</p>
			</div> 
    </div>
  );
}

export default Skill;
