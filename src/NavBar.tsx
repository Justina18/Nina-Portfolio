"use client";
import { File } from "lucide-react";

const NavBar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-10 left-0 right-0 glass z-50 my-0 mx-auto flex w-[306px] items-center justify-center gap-1 rounded-lg bg-[#07070a]/90 px-1 py-1 text-[#e4ded7] backdrop-blur-md sm:w-[383.3px] md:p-2 lg:w-[391.3px]">
      <a
        href="https://drive.google.com/file/d/17BlCa1Fp5kovQR3nNx43zJ-A7FYUq2b7/view?usp=sharing"
        target="_blank"
        className="flex"
        aria-label="Open my resume"
        data-blobity-tooltip="View Resume"
        data-blobity-magnetic="false"
      >
        <File size={24} className="text-white" />
      </a>

      {[
        { href: "#home", label: "Home" },
        { href: "#work", label: "Work" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact" },
      ].map(({ href, label }) => (
        <a
          key={href}
          href={href}
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label={`Scroll to ${label} Section`}
        >
          <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
            {label}
          </h4>
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
