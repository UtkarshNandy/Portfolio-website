import React from "react";
import { Poppins } from "@next/font/google";
import { useInView } from "react-intersection-observer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "700"],
});

const Aboutme = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="flex flex-row justify-center items-start space-x-32 mt-96 text-2xl">
      <div>
        {/* Header */}
        <h1
          ref={ref1}
          className={` text-5xl font-bold ${poppins.className} ${
            inView1
              ? "animate-slideDown opacity-100 transition-all delay-1000 animate-bounceIndefinitely"
              : "opacity-0"
          }`}
        >
          Bio
        </h1>
        {/* Paragraph */}
        <p
          className={`${
            poppins.className
          } w-64 mt-5  font-light transition-all duration-700 ${
            inView1
              ? "opacity-100 translate-y-0 delay-1000"
              : "opacity-0 translate-y-10"
          }`}
        >
          I am a fourth-year computer science student at UC Davis. I decided to
          switch from Mechanical Engineering in my third year, and the decision
          has been fruitful. I have explored frontend, backend,
          systems/networking, and AI/ML.
        </p>
      </div>

      <div>
        {/* Header */}
        <h1
          ref={ref2}
          className={` text-5xl font-bold ${poppins.className} ${
            inView2
              ? "animate-slideDown opacity-100 transition-all delay-1000 animate-bounceIndefinitely"
              : "opacity-0"
          }`}
        >
          Hobbies
        </h1>
        {/* Paragraph */}
        <p
          className={`${
            poppins.className
          } w-64 mt-5  font-light transition-all duration-700 ${
            inView2
              ? "opacity-100 translate-y-0 delay-1000"
              : "opacity-0 translate-y-10"
          }`}
        >
          In my free time, I enjoy reading philosophy, trying different
          cuisines/cooking, lifting weights, and watching NBA. I also try
          learning new sports like pickleball and squash. I take my nutrition
          and body pretty seriously, and aim to compete in bodybuilding
          competitions soon.
        </p>
      </div>

      <div>
        {/* Header */}
        <h1
          ref={ref3}
          className={` text-5xl font-bold ${poppins.className} ${
            inView3
              ? "animate-slideDown opacity-100 transition-all delay-1000 animate-bounceIndefinitely"
              : "opacity-0"
          }`}
        >
          Future
        </h1>
        {/* Paragraph */}
        <p
          className={`${
            poppins.className
          } w-64 mt-5 font-light transition-all duration-700 ${
            inView3
              ? "opacity-100 translate-y-0 delay-1000"
              : "opacity-0 translate-y-10"
          }`}
        >
          In the future, I plan on either pursuing a job in the software
          industry, or pursuing a master's in distributed/operating systems. My
          ultimate goal is to work as a quantitative developer/trader on Wall
          Street in New York.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
