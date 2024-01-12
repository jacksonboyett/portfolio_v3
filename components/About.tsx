import Person from "@/public/Person";

function About() {
  return (
    <div className="h-screen pt-20 relative text-primary">
        <div className="h-3 w-32 bg-primary mx-auto relative z-1">
          <h2 className="text-5xl font-extrabold tracking-wider absolute -bottom-0 right-2 text-white">
            About
          </h2>
      </div>
      <div className="bg-background flex justify-center">
      <div className="">Left</div>
      <Person/>
      <div className="">Right</div>
      </div>
    </div>
  );
}

export default About;
