import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import {
  LineChart,
  TrendingUp,
  BarChart3,
  Users,
  CalendarClock,
  // UserCheck,
  Mail,
  // LucideIcon
} from "lucide-react";

// Define types for the application
interface Panel {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  action: string;
  link: string;
  backgroundImage: string; // Changed from gradientClass to backgroundImage
  gradientClass: string; // Keep for color effects
}

interface PanelItemProps {
  panel: Panel;
  isSelected: boolean;
  onMouseEnter: () => void;
  desktopMedium: boolean;
}

interface MediaQueryState {
  desktopMedium: boolean;
}

// Custom hook to check media query
const useMediaQuery = (): MediaQueryState => {
  const [desktopMedium, setDesktopMedium] = useState<boolean>(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    
    const handleChange = (e: MediaQueryListEvent): void => {
      setDesktopMedium(e.matches);
    };

    // Modern API for media query event listener
    mediaQuery.addEventListener("change", handleChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return { desktopMedium };
};

const Dashboard: React.FC = () => {
  const [expandedPanel, setExpandedPanel] = useState<number>(0);
  const { desktopMedium } = useMediaQuery();

  const panels: Panel[] = [
    {
      id: 0,
      title: "Tranxact",
      description:
        "A real-time stock prices and market movements with interactive charts.",
      icon: <LineChart size={40} />,
      action: "View Project",
      link: "/projects/tranxact",
      backgroundImage: "/tranxact.png", // Actual image path
      gradientClass: "bg-gradient-to-br from-blue-500/20 to-blue-600/10",
    },
    {
      id: 1,
      title: "PhysioHelp",
      description:
        "Price targets and rating consensus from top Wall Street analysts.",
      icon: <TrendingUp size={20} />,
      action: "See Estimates",
      link: "https://www.physiohelp.ng",
      backgroundImage: "/PHelp.jpg", // Actual image path
      gradientClass: "bg-gradient-to-br from-purple-500/20 to-purple-600/10",
    },
    {
      id: 2,
      title: "BlessPM",
      description: "Simple and easy-to-use portfolio.",
      icon: <BarChart3 size={20} />,
      action: "View Financials",
      link: "https://blair-folio.vercel.app/",
      backgroundImage: "/blessing.png",
      gradientClass: "bg-gradient-to-br from-emerald-500/20 to-emerald-600/10",
    },
    {
      id: 3,
      title: "Soundlux",
      description:
        "Landing page for headphone company.",
      icon: <Users size={20} />,
      action: "View Project",
      link: "https://lawrence-mu.vercel.app/",
      backgroundImage: "/soundlux.jpg",
      gradientClass: "bg-gradient-to-br from-white-500/20 to-amber-600/10",
    },
    {
      id: 4,
      title: "The Art of Travelling",
      description:
        "Flight Booking website.",
      icon: <CalendarClock size={20} />,
      action: "View Project",
      link: "https://art-of-travelling.vercel.app/",
      backgroundImage: "/aot.jpg", 
      gradientClass: "bg-gradient-to-br from-rose-500/20 to-rose-600/10",
    },
    // {
    //   id: 5,
    //   title: "P2BU",
    //   description:
    //     "E-commerce Website for Proud 2 Be Ugly.",
    //   icon: <UserCheck size={20} />,
    //   action: "View Project",
    //   link: "/projects/p2bu",
    //   backgroundImage: "/images/p2bu-bg.jpg",
    //   gradientClass: "bg-gradient-to-br from-cyan-500/20 to-cyan-600/10",
    // },
    {
      id: 6,
      title: "The Bud Barbers",
      description: "Brand redesign for The Bud Barbers.",
      icon: <Mail size={20} />,
      action: "View Project",
      link: "https://www.behance.net/gallery/220474129/The-Bud-Barbers-branding-redesign",
      backgroundImage: "/bud.png", 
      gradientClass: "bg-gradient-to-br from-indigo-500/20 to-indigo-600/10",
    },
  ];

  const handleMouseEnter = (id: number): void => {
    setExpandedPanel(id);
  };

  return (
    <div className="flex fadeIn items-center flex-col w-full h-screen bg-gray-950/80 text-gray-100 p-6 overflow-hidden">
      <header className="mb-6">
        <h1 className="text-2xl font-medium text-white">Project Portfolio</h1>
        <p className="text-gray-400">Interactive portfolio showcase</p>
      </header>

      <div className="flex flex-1 space-x-3 overflow-x-auto py-4">
        {panels.map((panel) => (
          <PanelItem
            key={panel.id}
            panel={panel}
            isSelected={expandedPanel === panel.id}
            onMouseEnter={() => handleMouseEnter(panel.id)}
            desktopMedium={desktopMedium}
          />
        ))}
      </div>
    </div>
  );
};

// Separate component for each panel to better manage spring animations
const PanelItem: React.FC<PanelItemProps> = ({ 
  panel, 
  isSelected, 
  onMouseEnter, 
  desktopMedium 
}) => {
  const startWidth = desktopMedium ? 70 : 100; // Width when collapsed
  const endWidth = desktopMedium ? 563 : 575; // Width when expanded

  // Using the spring configuration for width animation
  const props = useSpring({
    width: isSelected ? endWidth : startWidth,
    config: { mass: 5, friction: 120, tension: 600 },
  });

  // Content opacity spring animation
  const contentProps = useSpring({
    opacity: isSelected ? 1 : 0,
    config: { duration: 600 },
  });

  return (
    <animated.div
      className={`relative h-full rounded-xl backdrop-blur-sm overflow-hidden ${
        isSelected 
          ? "bg-gray-800/20 border border-gray-700" 
          : "bg-gray-800/20 border border-gray-800/50"
      }`}
      style={props}
      onMouseEnter={onMouseEnter}
    >
      {/* Background container with actual image and overlay */}
      <div className="absolute inset-0 -z-10 rounded-xl overflow-hidden">
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out ${
            isSelected ? "scale-110 opacity-40" : "scale-100 opacity-20"
          }`}
          style={{
            backgroundImage: `url('${panel.backgroundImage}')`
          }}
        ></div>
        {/* Apply color overlay with the gradientClass */}
        <div className={`absolute inset-0 ${panel.gradientClass} opacity-50 -z-5`}></div>
        {/* Add additional dark gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20 -z-5"></div>
      </div>

      {/* Glass shine effect */}
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-400/50 to-transparent transition-opacity duration-500 ${
          isSelected ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Vertical title */}
      <div
        className={`absolute flex items-center z-10 pointer-events-none h-6 top-60 left-8 w-96 transform-gpu -translate-x-1/2 -translate-y-1/2 rotate-90 origin-center ${
          isSelected ? "" : "opacity-80"
        }`}
      >
        <span className="text-sm font-semibold tracking-wide text-gray-200 whitespace-nowrap">
          {panel.title}
        </span>
      </div>

      {/* Expanded content */}
      <animated.div 
        className="absolute inset-0 w-96 pointer-events-none"
        style={contentProps}
      >
        <div className="p-5 pl-16 h-full flex flex-col mt-8">
          <div className="flex items-center mb-3">
            <div className="p-2 rounded-lg bg-gray-700/50 mr-3">
              {panel.icon}
            </div>
          </div>

          <p className="text-gray-300 mb-5 text-sm leading-relaxed">
            {panel.description}
          </p>

          <div className="mt-auto pointer-events-auto">
            <a 
              href= {panel.link}
              target="_blank"
              className="inline-flex items-center space-x-2 mb-8 bg-white px-4 py-2 rounded-lg text-sm transition-colors duration-300 hover:bg-gray-600 no-underline text-black"
            >
              <span>{panel.action}</span>
              <span className="inline-flex w-4 h-4">
                {React.cloneElement(panel.icon, { size: 16 })}
              </span>
            </a>
          </div>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default Dashboard;