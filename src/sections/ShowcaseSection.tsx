import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import ProjectLinks from "../components/ProjectLinks";
import "../styles/holographic-cards.css";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    gsap.utils.toArray<HTMLElement>(".showcase-card").forEach((card) => {
      gsap.fromTo(card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
<div
  id="work"
  ref={sectionRef}
  className="app-showcase relative z-10 pt-40"
>      <div className="w-full">
        <TitleHeader
          title="My Frontend Projects"
          sub="🛠️ My Works & projects Overview"
        />

        <div className="showcaselayout md:pb-36 pb-18">
          <div

            onClick={() => {
              window.open("https://zentry-game.vercel.app", "_blank");
            }}
            className="first-project-wrapper cursor-pointer showcase-card"
          >
            <div className="image-wrapper holographic-card">
              <div className="holographic-content">
                <img
                  src="/images/project1.png"
                  alt="Zentry Game Landing Page"
                />
              </div>
            </div>
            <div className="text-content">
              <h2 className="mb-4">
                Zentry Game Landing Page - Interactive Gaming Experience{" "}
                <ProjectLinks githubUrl="https://github.com/aswinpclt/max_gaming" className="" />
              </h2>
              <p className="text-white-50 md:text-xl">
                A modern gaming landing page built with TypeScript, React,
                TailwindCSS & GSAP for smooth animations. This immersive gaming
                experience features interactive elements, responsive design
                optimized for all devices, and advanced scroll-triggered
                animations. The project showcases cutting-edge web technologies
                with seamless user interactions and dynamic visual effects that
                bring the gaming world to life.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project cursor-pointer showcase-card" onClick={() => {
              window.open("https://apple-macbook-website1996.vercel.app/")
            }} >
              <div className="image-wrapper bg-[#FFEFDB] holographic-card">
                <div className="holographic-content">
                  <img
                    src="/images/project2.png"
                    alt="MacBook 3D Landing Page"
                  />
                </div>
              </div>
              <h2 className="mb-4">
                MacBook Pro 3D Landing Page <ProjectLinks githubUrl="https://github.com/aswinpclt/macbook_pro" />
              </h2>
              <p className="text-white-50 text-sm mt-2">
                Built with GSAP, TailwindCSS & Three.js for immersive 3D
                experience.
              </p>
            </div>

            <div className="project cursor-pointer showcase-card" >
              <div className="image-wrapper bg-[#FFEFDB] holographic-card">
                <div className="holographic-content">
                  <img
                    src="/images/project3.png"
                    alt="Velvet Pour Drinks Website"
                  />
                </div>
              </div>
              <h2 className="mb-4">
                Velvet Pour - Premium Drinks Experience{" "}
                <ProjectLinks githubUrl="https://github.com/aswinpclt/mojito" />
              </h2>
              <p className="text-white-50 text-sm mt-2">
                Elegant beverage website serving variety of drinks, built with
                GSAP animations.
              </p>
            </div>
          </div>
        </div>

        <TitleHeader title="My Full-Stack Projects" />

        <div className="showcaselayout pb-18 md:pb-36">
          
          <div className="project-list-wrapper overflow-hidden">
            <div
              className="project showcase-card"

              onClick={() => {
                window.open(" https://crtd.in/", "_blank");
              }}
            >
              <div className="image-wrapper bg-[#FFEFDB] holographic-card">
                <div className="holographic-content">
                  <img
                    src="/images/project6.png"
                    alt="Library Management Platform"
                  />
                </div>
              </div>
              <h2>CRTD Technology Web Application.</h2>

              <p className="text-white-50 text-sm mt-2">
                A comprehensive web application for CRTD Technology built with the MERN stack, featuring automated deployment through CI/CD pipeline.
              </p>
            </div>

            
          </div>
        </div>

 
      </div>
    </div>
  );
};

export default ShowcaseSection;
