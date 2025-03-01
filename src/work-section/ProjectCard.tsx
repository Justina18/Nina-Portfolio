import { useEffect } from "react";
import { Github, Link as LinkIcon } from "lucide-react";
import { ProjectProps } from "./projectDetails";
import { motion } from "framer-motion";

function useIntersectionObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  useIntersectionObserver();

  return (
    <motion.div
      style={{
        backgroundColor: "#212531",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
      }}
      className="relative  h-[550px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px]"
      initial="initial"
      animate="animate"
    >
      <img
        src={image}
        alt={name}
        className={`absolute -bottom-2 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%] ${
          id % 2 === 0 ? "right-0" : "left-0"
        }`}
      />
      <div
        className={`absolute top-0 text-[#0E1016] ${
          id % 2 === 0 ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"
        } mt-6 flex items-center justify-center gap-4 lg:mt-10`}
      >
        {available ? (
          <>
            <a
              href={github}
              target="_blank"
              className="rounded-full"
              aria-label="Open GitHub Repository"
            >
              <Github className="w-[30px] h-[30px] p-1 bg-white rounded-full" />
            </a>
            <a href={demo} target="_blank" aria-label="Open Live Demo">
              <LinkIcon className="w-[30px] h-[30px] p-1 bg-white rounded-full" />
            </a>
          </>
        ) : (
          <div className="flex items-center justify-center gap-4">
            <a
              href={github}
              target="_blank"
              className="mt-1 rounded-full"
              aria-label="Open GitHub Repository"
            >
              <Github className="w-[30px] h-[30px] p-1 bg-white rounded-full" />
            </a>
            <div className="rounded-xl bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px]">
                Coming soon
              </h3>
            </div>
          </div>
        )}
      </div>
      <div
        className={`absolute text-white ${
          !(id % 2 === 0)
            ? "right-0 top-32 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60 lg:mr-4"
            : "left-10 top-32 ml-0 md:mr-12 lg:top-52 lg:ml-4"
        } mb-10 md:mb-16 lg:mb-14`}
      >
        <h2 className="max-w-[90%] text-[40px] leading-none text-white md:text-[44px] lg:max-w-[450px] lg:text-[48px]">
          {name}
        </h2>
        <p className="mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D]">
          {description}
        </p>
        <div className="mt-9 flex gap-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
