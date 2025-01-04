import React from "react";
import { Poppins } from "@next/font/google";
import { useInView } from "react-intersection-observer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "700"], // Include thinner (300) and thicker (700) weights
});

const Aboutme = () => {
  // Use Intersection Observer hooks
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true, // Animates only once
    threshold: 0.2, // Animation triggers when 20% of the element is visible
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
        <h1
          className={`text-white text-5xl font-bold animate-bounceSubtle ${poppins.className}`}
        >
          Bio
        </h1>
        <p
          ref={ref1}
          className={`${
            poppins.className
          } w-64 mt-5 text-white font-light transition-all duration-700 ${
            inView1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          I am a fourth-year computer science student at UC Davis. I decided to
          switch from Mechanical Engineering in my third year, and the decision
          has been fruitful. I have explored frontend, backend,
          systems/networking, and AI/ML.
        </p>
      </div>

      <div>
        <h1
          className={`text-white text-5xl font-bold animate-bounceSubtle ${poppins.className}`}
        >
          Hobbies
        </h1>
        <p
          ref={ref2}
          className={`${
            poppins.className
          } w-64 mt-5 text-white font-light transition-all duration-700 ${
            inView2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
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
        <h1
          className={`text-white text-5xl font-bold animate-bounceSubtle ${poppins.className}`}
        >
          Future
        </h1>
        <p
          ref={ref3}
          className={`${
            poppins.className
          } w-64 mt-5 text-white font-light transition-all duration-700 ${
            inView3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
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
