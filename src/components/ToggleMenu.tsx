import { useState } from "react";

export const ToggleMenu = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleMenu = () => {
    document.querySelector("body")!.classList.toggle("mobile-nav-active");
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      {/* <!-- ======= Mobile nav toggle button ======= --> */}
      <i
        className={`bi ${isNavActive ? "bi-x" : "bi-list"} mobile-nav-toggle d-xl-none`}
        onClick={toggleMenu}
      ></i>
    </>
  );
};
