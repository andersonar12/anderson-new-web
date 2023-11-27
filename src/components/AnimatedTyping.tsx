import { useEffect } from "react";
import Typed from "typed.js";
import AOS from "aos";

let typeInited = null as Typed | null;

export const AnimatedTyping = () => {
  useEffect(() => {
    //AOS Animation
    AOS.init({
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    const initTyped = () => {
      const element = document.querySelector(".typed");
      if (element) {
        typeInited = new Typed(element, {
          strings: ["Web Developer", "Systems Engineer", "Frontend Developer", "Freelancer"],
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
        });
      }
    };

    if (!typeInited) {
      initTyped();
    }

    // return () => {
    //   typeInited!.destroy();
    // };
  }, []);
  return <span className="typed ms-2"></span>;
};
