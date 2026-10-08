import { motion } from "framer-motion"; 
import { FiArrowRight, FiDownload } from "react-icons/fi"; 
 
// 1. Framer Motion Animation Variants for Staggered Orchestration 
const containerVariants = { 
  hidden: { opacity: 0 }, 
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.15, // Automatically spaces out child animations cleanly 
    }, 
  }, 
}; 
 
const itemVariants = { 
  hidden: { opacity: 0, y: 30 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 90, damping: 14 }, 
  }, 
}; 
 
const badgeVariants = { 
  hidden: { opacity: 0, scale: 0.92 }, 
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { type: "spring", stiffness: 100, damping: 15 }, 
  }, 
}; 
 
function Hero() { 
  const stats = [ 
    { value: "5+", label: "Major Projects", color: "text-blue-400" }, 
    { value: "10+", label: "Technologies", color: "text-purple-400" }, 
    { value: "100%", label: "Learning Focus", color: "text-cyan-400" }, 
    { value: "BCSIT", label: "Academic Track", color: "text-emerald-400" }, 
  ]; 
 
  return ( 
    <section  
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-16 md:py-24" 
      aria-label="Introduction Summary" 
    > 
      {/* Dynamic Background Radial Blur Layers */} 
      <div  
        className="absolute top-1/4 left-5 w-72 h-72 bg-blue-500/10 blur-[130px] rounded-full pointer-events-none animate-pulse"  
        style={{ animationDuration: '8s' }}  
      /> 
      <div  
        className="absolute bottom-1/4 right-5 w-80 h-80 bg-purple-500/10 blur-[130px] rounded-full pointer-events-none animate-pulse"  
        style={{ animationDuration: '12s' }}  
      /> 
 
      <motion.div  
        className="max-w-4xl mx-auto px-4 text-center relative z-10" 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
      > 
        {/* Status Badge */} 
        <motion.div variants={badgeVariants} className="inline-block mb-8"> 
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40 backdrop-blur-md shadow-inner"> 
            <span className="relative flex h-2 w-2"> 
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span> 
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span> 
            </span> 
            <span className="text-xs md:text-sm text-zinc-300 font-medium tracking-wide"> 
              Available for Internships & Freelance 
            </span> 
          </div> 
        </motion.div> 
 
        {/* Primary Main Title Heading */} 
        <motion.h1  
          variants={itemVariants} 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-zinc-100" 
        > 
          Hi, I'm{" "} 
          <span className="relative inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent select-none"> 
            Santosh 
          </span> 
        </motion.h1> 
 
        {/* Subtitle Label */} 
        <motion.h2  
          variants={itemVariants} 
          className="mt-6 text-xl sm:text-2xl md:text-4xl font-bold tracking-medium text-zinc-300" 
        > 
          Full Stack Developer 
        </motion.h2> 
 
        {/* Context Profile Description */} 
        <motion.p  
          variants={itemVariants} 
          className="max-w-2xl mx-auto mt-6 text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed font-normal" 
        > 
          BCSIT Student at Apollo International College passionate about 
          building modern, scalable, and user-friendly web applications using 
          <span className="text-zinc-200 font-medium"> React, Node.js, Express.js, MySQL,</span> and <span className="text-zinc-200 font-medium">MongoDB</span>. 
        </motion.p> 
 
        {/* Action Button Trigger Row */} 
        <motion.div  
          variants={itemVariants} 
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4" 
        > 
          <a 
            href="#projects" 
            className="group w-full sm:w-auto px-8 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-white/5 hover:scale-[1.02]" 
          > 
            View Projects 
            <FiArrowRight className="text-lg transition-transform duration-200 group-hover:translate-x-1" /> 
          </a> 
 
          <a 
            href="/resume.pdf" 
            download 
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/60 hover:border-zinc-700 backdrop-blur-md text-zinc-200 font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02]" 
            aria-label="Download Santosh's CV" 
          > 
            <FiDownload className="text-base" /> 
            Download CV 
          </a> 
        </motion.div> 
 
        {/* Performance & Academic Metrics Grid */} 
        <motion.div  
          variants={itemVariants} 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 pt-10 border-t border-zinc-900/60" 
        > 
          {stats.map((stat, i) => ( 
            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left"> 
              <span className={`text-3xl md:text-4xl font-extrabold tracking-tight ${stat.color}`}> 
                {stat.value} 
              </span> 
              <span className="text-xs md:text-sm text-zinc-500 font-medium mt-1.5 tracking-wide uppercase"> 
                {stat.label} 
              </span> 
            </div> 
          ))} 
        </motion.div> 
 
      </motion.div> 
    </section> 
  ); 
} 
 
export default Hero;  