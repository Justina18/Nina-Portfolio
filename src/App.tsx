import { useEffect } from "react";
import CustomCursor from "./CustomCursor";
import LoadingAnimation from "./LoadingAnimation";
import "animate.css";
import NavBar from "./NavBar";
// import SwitchingText from "./SwitchingText";

import { Briefcase, Github, ExternalLink, Mail, Cpu } from "lucide-react";
// import BlogCard from "./blog-section/BlogCard";
import Blog from "./blog-section/BlogGrid";
import Work from "./work-section/Work";

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

function App() {
  useIntersectionObserver();
  const year = new Date().getFullYear();

  return (
    <div className="relative bg-[--color-dark]  min-h-screen">
      <CustomCursor />
      <LoadingAnimation />
      <div id="loader">
        <div className="line">
          <h1 className="animate-bounce head-font">
            Designer. Developer. Senior Dabbler
          </h1>
        </div>
      </div>

      {/* Hero Section */}
      <NavBar />
      <section
        className="min-h-screen relative overflow-hidden bg-cover bg-center before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-95 fadeIn"
        style={{ backgroundImage: "url('/back.png')" }}
        id="home"
      >
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="animate-on-scroll section-container relative flex justify-around flex-col min-h-screen px-0 py-4">
          <div className="animate-on-scroll slideInDown mt-2 flex justify-between">
            <button className="font bg-transparent border-[2px] text-white px-4 py-2 rounded-sm flex items-center hover:scale-105 hover:bg-white hover:text-black hover:text-bold cursor-none transition-all">
              BOOK A CALL
            </button>
            <div className="w-[300px] flex items-center justify-between">
              <h2 className="flex items-center gap-1 font-bold text-[#e4ded7] sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px] hover:text-gray-400">
                LN
              </h2>
              <h2 className="flex items-center gap-1 font-bold text-[#e4ded7] sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px] hover:text-gray-400">
                GH
              </h2>
              <a
                href="#work"
                className="flex items-center gap-1 font-bold text-[#e4ded7] sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px] hover:text-gray-400"
              >
                TW
              </a>
              <a
                href="#contact"
                className="flex items-center gap-1 font-bold text-[#e4ded7] sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px] hover:text-gray-400"
              >
                CO
              </a>
            </div>
          </div>

          <div className="animate-on-scroll mb-20 mid-div flex flex-col items-center justify-center text-center">
            <h1 className="swiss-title flash">
              <span className="text-white z-0  text-[150px] head-font">
                JUSTINA <br /> IGBANI.
              </span>
            </h1>
            <img
              src="/bit.png"
              alt="Nina's Bitmoji"
              className="absolute slideInUp top-[85%] left-[40%] w-[150px] rounded-[8px] bg-white grayscale hover:grayscale-0 md:w-[200px] md:rounded-[18 px] lg:w-[240px]"
            />
            {/* <p className="swiss-subtitle max-w-2xl mb-8">
              <SwitchingText />
              Crafting digital experiences with precision and innovation.
            </p> */}
          </div>
          <div className="animate-on-scroll slideInUp mt-32 flex justify-between">
            <div>
              <p className="text-left w-[60%] text-[16px] font-semibold text-[#e4ded7] md:text-[18px]">
                Frontend Engineer and Web Designer, prev at Kora, currently
                available for work.
              </p>
            </div>
            {/* <div className="w-[450px] bg-[#05171a] text-white p-4 rounded-[12px] flex items-center justify-between">
              <File size={28} className="text-white" />
              <a
                href="#home"
                className="flex items-center gap-1 hover:text-gray-400"
              >
                Home
              </a>
              <a
                href="#about"
                className="flex items-center gap-1 hover:text-gray-400"
              >
                About
              </a>
              <a
                href="#work"
                className="flex items-center gap-1 hover:text-gray-400"
              >
                Work
              </a>
              <a
                href="#contact"
                className="flex items-center gap-1 hover:text-gray-400"
              >
                Contact
              </a>
            </div> */}
            <div className="flex justify-end">
              <p className="text-right  w-[60%] text-[16px] font-semibold text-[#e4ded7] md:text-[18px]">
                Focused on interfaces and experiences, working remotely from
                Lagos, Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Scrolling text Section*/}
      <div id="page5" data-scroll data-scroll-speed="-2.5">
        <div className="elem">
          <h1>
            <span>Movies</span> - Fashion - Technology -
          </h1>
          <h1>
            <span>Anime</span> - Fashion - Technology -
          </h1>
        </div>
        <div className="elem2">
          <h1>
            Science - <span>Partners</span> - Travel -
          </h1>
          <h1>
            Science - <span>Partners</span> - Travel -
          </h1>
        </div>
        <div className="elem">
          <h1>
            Sport - Fashion - <span>Technology</span> -
          </h1>
          <h1>
            Sport - Fashion - <span>Technology</span> -
          </h1>
        </div>
        <div className="elem2">
          <h1>
            <span>Science</span> - Partners - Travel -
          </h1>
          <h1>
            <span>Science</span> - Partners - Travel -
          </h1>
        </div>
      </div>

      {/* About Section */}
      <section
        className="relative z-10 w-full items-center justify-center overflow-hidden pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
        id="about"
      >
        <div className="animate-on-scroll mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
          <p className="mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]">
            I DESIGN BEAUTIFUL BRANDS, CRAFT POWERFUL WEBSITES, AND CAPTURE
            WHOLESOME MOMENTS.
          </p>

          <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
            <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
              <p>
                I specialize in designing intuitive and high-impact websites for
                SaaS, Web3, and AI startups. My passion lies in creating
                seamless digital experiences that blend aesthetics with
                functionality.
              </p>
              <p>
                Beyond my work as a UI/UX designer and product developer, I
                enjoy collaborating with cross-functional teams to turn ideas
                into market-ready solutions. I stay up-to-date with industry
                trends, constantly refining my skills to push the boundaries of
                design and technology.
              </p>
              <p>
                When I'm not writing code or designing, you can find me
                binge-watching anime, hanging out with friends, or discovering
                new music in my favorite genres like RnB, Afro-soul, and Chill
                Rap.
              </p>
              <p>
                I'm currently working on some exciting projects that I can't
                wait to share with you. But I'm always open to new opportunities
                and collaboration
              </p>
            </div>

            <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
              <div className="flex flex-col gap-4 md:gap-3">
                <p
                  className={
                    "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                  }
                >
                  Frontend Tools
                </p>
                <p>
                  {" "}
                  JavaScript (ES6+), React, Next.js, TypeScript, Prismic CMS,
                  Redux, Redux Toolkit, React Testing Library, Vitetest, HTML5,
                  Git/GitHub, NextAuth, Formik.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p
                  className={
                    "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                  }
                >
                  {" "}
                  UI Libraries
                </p>
                <p>
                  {" "}
                  CSS3/SCSS/SASS, Tailwind CSS, Material UI, Framer Motion,
                  GSAP, Bootstrap, Chart.js.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h2
                  className={
                    "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                  }
                >
                  Design Tools
                </h2>
                <p>
                  {" "}
                  Figma, Framer, FigJam, Adobe XD, ProtoPie, Adobe Photoshop, UX
                  Research, UI Design, Prototyping.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
            {/* <SongCarousel /> */}
            <h2 className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] ">
              A few songs I can recommend if you're looking for some fresh tunes
            </h2>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              className="text-gray-500 hover:text-[--color-turquoise]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-gray-500 hover:text-[--color-turquoise]"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <Work />
      <section className="bg-[--color-dark]">
        <div className="section-container">
          <div className="text-center mb-16 animate-on-scroll">
            <Briefcase className="w-16 h-16 text-[--color-turquoise] mx-auto mb-6 opacity-75" />
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A selection of my most impactful work, showcasing web applications
              and design systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="project-card animate-on-scroll">
                <div className="tech-container flex items-center justify-center">
                  <Cpu className="w-20 h-20 text-[--color-turquoise] opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Project Title {project}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    A brief description of the project and its key features.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[--color-turquoise] flex items-center gap-1"
                    >
                      View Case Study <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <Blog />

      {/* Contact Section */}
      <section
        className="animate-on-scroll flex h-[100vh] w-full items-center items-center justify-center text-center overflow-hidden bg-[#011c21] bg-center py-16"
        id="contact"
      >
        <div className="mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-[130px]  uppercase leading-[0.9em] text-[#e4ded7] head-font sm:text-[120px] md:text-[150px] lg:text-[180px] xl:text-[200px]">
              Let's Talk
            </h1>
          </div>
          <img
            src="/call.png"
            alt="Nina's Bitmoji"
            className="w-[150px] rounded-[8px] bg-white grayscale hover:grayscale-0 md:w-[200px] md:rounded-[18 px] lg:w-[280px]"
          />
          <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
            <div className="flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
              <p>
                Got a question, proposal, project, or want to work together on
                something?
              </p>
              <div className="mt-5 flex w-[298px] items-center gap-1 md:w-[335px] md:gap-2.5">
                <a
                  href="mailto:igbanijustina@gmail.com?subject=Lets%20work%20together!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:no-underline"
                >
                  Send me an email
                </a>
                <span className="mx-2">or</span>
                <a
                  href="https://cal.com/nina-igbani/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:no-underline"
                >
                  Book a call
                </a>
              </div>
            </div>

            <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7] sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
              <a
                href="https://github.com/Justina18"
                target="_blank"
                rel="noopener noreferrer"
              >
                GH
              </a>
              <a
                className="flex items-center gap-1 hover:text-gray-400"
                href="https://www.linkedin.com/in/justina-igbani-723a77250/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LN
              </a>
              <a
                href="https://www.instagram.com/victorwill__/"
                target="_blank"
                rel="noopener noreferrer"
              >
                IG
              </a>
              <a
                href="https://medium.com/@igbanijustina"
                target="_blank"
                rel="noopener noreferrer"
              >
                MD
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="h-[15vh] w-full items-center justify-center border-t-[3px] border-[#e4ded7]/30 pt-10 font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0">
        <div className="mx-auto flex w-[90%] flex-row items-center justify-between text-center text-[12px] text-[#e4ded7] sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
          <p className="m-0 p-0">Copyright {year}</p>
          <div className="flex flex-col sm:flex-row sm:gap-1 md:gap-2">
            <p className="m-0 p-0">Design & Development by</p>
            <a
              href="https://github.com/Justina18"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:no-underline"
              aria-label="Victor's GitHub Profile"
            >
              Ninamma Igbani
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
