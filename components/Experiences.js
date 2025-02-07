import { AnimatedItems } from "@/components/ui/animated-items";

export function Experiences() {
  const experiences = [
    {
      description:
        "Worked on core distributed systems, primarily on Rust. Built the entire C++ SDK",
      name: "Weilliptic",
      designation: "Software Engineer - 1",
      src: "/panora.avif",
    },
    {
      description:
        "Wrote a lot of Solidity smart contracts. Built a lottery contract. Wrote Base64 encoding decoding functions",
      name: "Lazychain",
      designation: "Software Engineer - 1",
      src: "/panora.avif",
    },
    {
        description:
        "Played around with Websockets, Redis, Docker, AWS, TimescaleDB, Nodejs",
      name: "Panora Exchange",
      designation: "Backend and Infrastructure Intern",
      src: "/panora.avif",
    },
    {
        description:
        "Wrote a lot of SQL and Python and understood various paradigms of fraud-detection. Wrote statistical models to combat them",
      name: "NPCI",
      designation: "ML Engineering Intern",
      src: "/panora.avif",
    },
    {
        description:
        "Worked on the React frontend and made end to end flow of Time series",
      name: "Dendrite.ai",
      designation: "Software Engineering Intern",
      src: "/panora.avif",
    },
  ];
  return <AnimatedItems items={experiences} />;
}
