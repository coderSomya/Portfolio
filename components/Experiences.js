import { AnimatedItems } from "@/components/ui/animated-items";

export function Experiences() {
  const experiences = [
    {
      description:
        "Worked on core distributed systems, primarily on Rust. Built the entire C++ SDK",
      name: "Weilliptic",
      designation: "Software Engineer - 1",
      src: "/weilliptic.png",
    },
    {
      description:
        "Wrote a lot of Solidity smart contracts. Built a lottery contract. Wrote Base64 encoding decoding functions",
      name: "Lazychain",
      designation: "Software Engineer - 1",
      src: "/lazy.jpeg",
    },
    {
        description:
        "Played around with Websockets, Redis, Docker, AWS, TimescaleDB, Nodejs",
      name: "Panora Exchange",
      designation: "Backend and Infrastructure Intern",
      src: "/panora.jpeg",
    },
    {
        description:
        "Wrote a lot of SQL and Python and understood various paradigms of fraud-detection. Wrote statistical models to combat them",
      name: "NPCI",
      designation: "ML Engineering Intern",
      src: "/npci.png",
    },
    {
      description:
      "Led the e2e development of a Fintech B2B SaaS product",
    name: "Dhruva Capital",
    designation: "Tech Lead",
    src: "/dc.png",
    },
    {
        description:
        "Worked on the React frontend and made end to end flow of Time series",
      name: "Dendrite.ai",
      designation: "Software Engineering Intern",
      src: "/dendrite.jpeg",
    },
  ];
  return (
    <div>
    <div className="text-center mb-8">
    <h1 className="text-2xl font-bold mb-2 text-neutral-800 dark:text-neutral-200">
      Experiences
    </h1>
    <p className="text-neutral-600 dark:text-neutral-400">
      and organizations i've worked with
    </p>
  </div>
  <AnimatedItems items={experiences} />
</div>  
);
}
