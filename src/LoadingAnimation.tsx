import { useEffect } from "react";
import gsap from "gsap";

const LoadingAnimation = () => {
    
  useEffect(() => {
    const tl = gsap.timeline();

    // Animate the text appearing
    tl.from(".line h1", {
      y: 200,
      stagger: 0.25,
      duration: 0.6,
      delay: 0.5,
    });

    // Simulate the counter increasing from 0 to 100
    tl.from("#line1-part1", {
      opacity: 0,
      onStart: () => {
        let counter = 0;
        const h5Timer = document.querySelector("#line1-part1 h5");
        const interval = setInterval(() => {
          if (counter < 100) {
            h5Timer!.innerHTML = `${counter++}`;
          } else {
            h5Timer!.innerHTML = "100";
            clearInterval(interval);
          }
        }, 27);
      },
    });

    // Trigger CSS animation for text
    tl.to(".line h2", {
      animationName: "loaderAnime",
      opacity: 1,
    });

    // Hide loader after animation
    tl.to("#loader", {
      opacity: 0,
      duration: 0.2,
      delay: 2.7,
    });

    // Reveal the main page smoothly
    tl.from("#page1", {
      delay: 0.1,
      y: 1600,
      duration: 0.5,
      ease: "power4.out",
    });

    // Ensure loader is completely removed
    tl.to("#loader", {
      display: "none",
    });

    // Fade in the navigation
    tl.from("#nav", {
      opacity: 0,
    });

    // Animate headers appearing
    tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
      y: 140,
      stagger: 0.2,
    });

    // Final fade-in for additional sections
    tl.from(
      "#hero1, #page2",
      {
        opacity: 0,
      },
      "-=1.2"
    );
  }, []);

  return null; // This component only handles animations, no UI is needed here
};

export default LoadingAnimation;
