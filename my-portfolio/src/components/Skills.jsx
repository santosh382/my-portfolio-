import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

// 1. Isolated Data Configuration with Semantic Hex Colors
const SKILLS_DATA = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

// 2. Framer Motion Orchestration Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="relative py-24 bg-black text-white overflow-hidden selection:bg-zinc-800"
      aria-labelledby="skills-heading"
    >
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 z-10">
        <header className="text-center mb-16">
          <h2 
            id="skills-heading"
            className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent"
          >
            Technical Expertise
          </h2>
          <p className="mt-4 text-zinc-400 max-w-md mx-auto text-sm md:text-base">
            A look at the core stack, frameworks, and tools I use to build high-performance web applications.
          </p>
        </header>

        {/* Animated Grid Container */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SKILLS_DATA.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/80 p-6 rounded-2xl flex flex-col items-center gap-4 transition-colors duration-300 hover:bg-zinc-900 hover:border-zinc-700 cursor-default"
                style={{
                  // Setting a CSS variable dynamically for cleaner Tailwind arbitrary value integration
                  "--brand-color": skill.color,
                }}
              >
                {/* Visual Glow Effect Behind Icon on Hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--brand-color)_0%,transparent_70%)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 rounded-2xl pointer-events-none" />

                {/* Dynamic Brand Color Icon */}
                <div 
                  className="text-4xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  <Icon aria-hidden="true" />
                </div>
                
                {/* Skill Title */}
                <span className="font-semibold text-sm md:text-base text-zinc-400 group-hover:text-zinc-100 transition-colors duration-200 tracking-wide">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}