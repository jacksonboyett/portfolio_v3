import { MutableRefObject } from 'react';

interface NavbarProps {
  executeScroll: (ref: MutableRefObject<HTMLDivElement>) => void;
  home: MutableRefObject<HTMLDivElement>;
  about: MutableRefObject<HTMLDivElement>;
  projects: MutableRefObject<HTMLDivElement>;
}

function Navbar({ executeScroll, about, projects, home }: NavbarProps) {
  return (
    <div className="bg-secondary-muted h-16 flex font-bold justify-center sm:justify-end items-center sm:pr-4 md:pr-8 sticky z-20 top-0">
      <a href="/jacksonboyett_resume.pdf" className="mr-auto ml-4">
        <h2 className="cursor-pointer hover:bg-primary/50 px-2 py-1 rounded">
          VIEW RESUME
        </h2>
      </a>
      <h2
        className="cursor-pointer hover:bg-primary/50 px-2 py-1 rounded"
        onClick={() => executeScroll(home)}>
        HOME
      </h2>
      <h2
        className="cursor-pointer  hover:bg-primary/50 px-2 py-1 rounded"
        onClick={() => executeScroll(about)}>
        ABOUT
      </h2>
      <h2
        className="cursor-pointer  hover:bg-primary/50 px-2 py-1 rounded"
        onClick={() => executeScroll(projects)}>
        PROJECTS
      </h2>
      <h2 className="cursor-pointer hover:bg-primary/50 px-2 py-1 rounded">
        CONTACT
      </h2>
    </div>
  );
}

export default Navbar;
