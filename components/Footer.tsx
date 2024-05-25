import { ChevronsUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MutableRefObject } from 'react';

interface FooterProps {
  home: MutableRefObject<HTMLDivElement>;
  executeScroll: (ref: MutableRefObject<HTMLDivElement>) => void;
}

function Footer({ home, executeScroll }: FooterProps) {
  return (
    <div className="h-40 relative bg-background-light text-white flex flex-col justify-center items-center">
      <div
        onClick={() => executeScroll(home)}
        className="bg-primary h-12 w-10 flex justify-center items-center absolute -top-6 rounded  hover:-translate-y-2 transition-all duration-1000"
      >
        <ChevronsUp className="h-8 w-8" />
      </div>
      <div className="flex mb-4 gap-4">
        <Link href="https://github.com/jacksonboyett?tab=repositories">
          <Image
            className="hover:scale-110 transition-all duration-500"
            src="/github.png"
            alt="github logo"
            height={36}
            width={36}
          />
        </Link>
        <Link href="mailto:jacksonboyett16@gmail.com">
          <Image
            className="hover:scale-110 transition-all duration-500"
            src="/mail.png"
            alt="mail icon"
            height={36}
            width={36}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/jacksonboyett/">
          <Image
            className="hover:scale-110 transition-all duration-500"
            src="/linkedin.png"
            alt="linkedin logo"
            height={36}
            width={36}
          />
        </Link>
      </div>
      <p className="text-xs">JACKSON BOYETT ©2024</p>
    </div>
  );
}

export default Footer;
