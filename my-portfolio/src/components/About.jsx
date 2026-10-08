import { motion } from "framer-motion";
import { HiCode, HiDatabase, HiTerminal, HiBookOpen } from "react-icons/hi";

// 1. Framer Motion Variants for Staggered Scrolling Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 14 },
  },
};

export default function About() {
  const coreCompetencies = [
    {
      icon: HiCode,
      title: "Frontend Development",
      description: "Building responsive and modern user interfaces using React, JavaScript, HTML, CSS, and Tailwind CSS.",
      accent: "group-hover:text-blue-400",
      glow: "hover:shadow-blue-500/5",
    },
    {
      icon: HiTerminal,
      title: "Backend Development",
      description: "Developing scalable server-side applications using Node.js, Express.js, and architectural REST APIs.",
      accent: "group-hover:text-purple-400",
      glow: "hover:shadow-purple-500/5",
    },
    {
      icon: HiDatabase,
      title: "Database Management",
      description: "Working with MySQL and MongoDB for efficient data persistence, aggregation pipelines, and optimization.",
      accent: "group-hover:text-emerald-400",
      glow: "hover:shadow-emerald-500/5",
    },
    {
      icon: HiBookOpen,
      title: "Continuous Learning",
      description: "Always learning new technologies and improving software architecture patterns and problem-solving skills.",
      accent: "group-hover:text-cyan-400",
      glow: "hover:shadow-cyan-500/5",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* 2. Section Header Area */}
      <div className="text-center max-w-3xl mx-auto mb-20 px-4">
        <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-blue-500 mb-3 block">
          About Me
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Passionate About Building{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Full Stack Applications
          </span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          I'm Santosh Bajgain, a BCSIT student at Apollo International College with a strong interest in full-stack engineering.
        </p>
      </div>

      {/* 3. Asymmetric Content Grid Layout */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Side: Long-form Narrative Card */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-5 bg-zinc-900/40 backdrop-blur-sm border border-zinc-900 rounded-2xl p-8 lg:p-10 flex flex-col justify-between h-full hover:border-zinc-800 transition-colors duration-300"
        >
          <div>
            <h3 className="text-2xl font-bold text-zinc-100 tracking-tight mb-6">
              My Journey
            </h3>
            <div className="space-y-5 text-sm md:text-base text-zinc-400 font-normal leading-relaxed">
              <p>
                My journey into technology started with curiosity about how websites and applications work behind the scenes. Over time, I developed core skills in frontend and backend technologies and started building practical projects.
              </p>
              <p>
                Through projects such as a <span className="text-zinc-200 font-medium">Travel Website</span> and <span className="text-zinc-200 font-medium">Blog Management System</span>, I gained hands-on experience in creating user-friendly interfaces, designing backend systems, managing databases, and implementing real-world functionalities.
              </p>
              <p>
                My goal is to become a highly skilled Full Stack Developer capable of building scalable, high-performance web systems.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Grid of Competency Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
          {coreCompetencies.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-900/80 p-6 md:p-8 rounded-xl flex flex-col gap-4 transition-all duration-300 hover:bg-zinc-900/80 hover:border-zinc-800 shadow-lg ${card.glow}`}
              >
                {/* Dynamic Icon with Hover State Trigger */}
                <div className={`text-2xl text-blue-500 transition-colors duration-300 ${card.accent}`}>
                  <Icon aria-hidden="true" />
                </div>
                
                {/* Title & Description Stack */}
                <div className="space-y-2">
                  <h4 className="font-bold text-zinc-200 group-hover:text-white transition-colors duration-200 tracking-wide">
                    {card.title}
                  </h4>
                  <p className="text-xs md:text-sm text-zinc-400 font-normal leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}