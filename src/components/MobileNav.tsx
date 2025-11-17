import { useState } from "react";
import navLinks from "./navLinks.ts";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hamburger = ({
  setIsExpanded,
  isExpanded,
}: {
  setIsExpanded: (isExpanded: boolean) => void;
  isExpanded: boolean;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <button
      className="border group relative z-50 inline-flex w-12 h-12 text-center items-center justify-center rounded transition"
      aria-pressed={isExpanded}
      onClick={handleClick}
    >
      <span className="sr-only">Menu</span>
      <svg
        className="w-6 h-6 fill-current pointer-events-none"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-pressed:translate-x-0 group-aria-pressed:translate-y-0 group-aria-pressed:rotate-315"
          y="7"
          width="9"
          height="2"
          rx="1"
        ></rect>
        <rect
          className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-pressed:rotate-45"
          y="7"
          width="16"
          height="2"
          rx="1"
        ></rect>
        <rect
          className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-pressed:translate-y-0 group-aria-pressed:rotate-135"
          y="7"
          width="9"
          height="2"
          rx="1"
        ></rect>
      </svg>
    </button>
  );
};

const MobileNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="md:hidden">
      <Hamburger setIsExpanded={setIsExpanded} isExpanded={isExpanded} />
      <div
        className={`fixed bg-primary top-0 right-0 h-full border transform w-2/3 ${
          isExpanded ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        <div className="flex flex-col items-center justify-center pt-16 px-6 h-full">
          {/* Navigation Links */}
          <nav className="w-full space-y-12 h-full flex flex-col items-center justify-center">
            <div className="flex items-center gap-4 text-3xl border">
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaGithub />
              </a>
            </div>
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="border flex items-center gap-3 text-xl hover:underline transition-colors"
              >
                {link.label}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
