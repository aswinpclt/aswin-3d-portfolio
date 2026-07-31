import gsap from "gsap";
import Button from "../components/Button";
import { words } from "../constants";
import { useGSAP } from '@gsap/react'
import AnimatedCounter from "../components/AnimatedCounter";
import HeroExperince from "../components/HeroModels/HeroExperince";

const Hero = () => {

  useGSAP(() => {
    gsap.fromTo('.hero-text h1',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.inOut' }
    );
  });

  return (
<section
  id="hero"
  className="relative min-h-screen overflow-visible"
>
        <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

<div className="hero-layout relative">        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
<h1>
  Building
  <span className="slide">
    <span className="wrapper">
      {words.map((word, index) => (
<span
  key={`${word.text}-${index}`}
  className="flex items-center md:gap-3 gap-1 pb-2 text-[#74D802]"
>
          <img
            src={word.imgPath}
            alt={word.text}
            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
          />
          {word.text}
        </span>
      ))}
    </span>
  </span>
</h1>

<h1>Modern Web Applications</h1>

<h1>with AI & Backend Solutions</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
Hi, I'm Aswin P — a Full Stack Developer passionate about
building modern web applications, AI-powered software,
and scalable backend systems using React, Django,
FastAPI, Python and AWS.            </p>

<div className="flex flex-wrap gap-5 mt-8">



<a
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="md:w-80 md:h-16 w-60 h-12 cta-wrapper"
>
  <div className="cta-button group">
    <div className="bg-circle" />

    <p className="text">Download Resume</p>

    <div className="arrow-wrapper">
      <img
        src="/images/arrow-down.svg"
        alt="arrow"
      />
    </div>
  </div>
</a>

</div>
          </div>
        </header>

<figure className="relative flex items-end justify-center w-full h-[750px] overflow-visible">

  <img
    src="/images/aswin.png"
    alt="Aswin P"
    className="
      absolute
      right-[-20px]
      bottom-[40px]
      xl:w-[580px]
      lg:w-[500px]
      md:w-[420px]
      w-[320px]
      h-auto
      object-contain
      z-[999]
      select-none
      pointer-events-none
    "
  />

</figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
