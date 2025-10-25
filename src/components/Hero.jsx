import AnimatedText from './AnimatedText.jsx'
import actualimg from '../assets/profile.jpg';
import { useState,useEffect ,useCallback} from 'react';

// --- 1. HERO COMPONENT LOGIC ---
const particles = [
    { icon: '⚛️', color: 'text-blue-400', depth: 3, size: 'w-10 h-10', position: 'top-1/4 left-1/4' }, // React
    { icon: '🟢', color: 'text-green-500', depth: 2, size: 'w-16 h-16', position: 'top-1/2 right-1/4' }, // Node
    { icon: '🍃', color: 'text-cyan-500', depth: 4, size: 'w-12 h-12', position: 'bottom-1/4 left-1/2' }, // MongoDB
    { icon: '💨', color: 'text-purple-400', depth: 1, size: 'w-14 h-14', position: 'top-10 right-10' }, // Express
    { icon: '🛠️', color: 'text-yellow-400', depth: 5, size: 'w-8 h-8', position: 'bottom-20 left-10' }, // Tools

    
  { icon: '💻', color: 'text-blue-300', depth: 3, size: 'w-12 h-12', position: 'top-1/2 left-1/4' }, // Programming
  { icon: '⚙️', color: 'text-gray-300', depth: 2, size: 'w-16 h-16', position: 'top-1/2 right-1/4' }, // DSA & Logic
  { icon: '🌐', color: 'text-green-400', depth: 4, size: 'w-12 h-12', position: 'bottom-1/2 left-1/2' }, // Web Development
  

  { icon: '🔐', color: 'text-red-400', depth: 3, size: 'w-10 h-10', position: 'top-16 left-1/3' }, // Security & Authentication
  { icon: '🗄️', color: 'text-cyan-400', depth: 4, size: 'w-14 h-14', position: 'top-1/3 right-12' }, // Database & Queries
  { icon: '🔗', color: 'text-indigo-400', depth: 2, size: 'w-11 h-11', position: 'bottom-10 right-1/3' }, // APIs & Communication
  { icon: '🤝', color: 'text-pink-400', depth: 5, size: 'w-9 h-9', position: 'top-24 right-1/2' }, // Collaboration / Git
  { icon: '🚀', color: 'text-green-300', depth: 1, size: 'w-16 h-16', position: 'bottom-12 left-1/4' } // Deployment / CI-CD


];

const Hero = () => {
    // State to store mouse position for parallax calculation
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Handle mouse movement, normalized to the center of the screen
    const handleMouseMove = useCallback((e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        // Normalize position: 0,0 is center, max values are +/- 50
        const x = (clientX - innerWidth / 2) / (innerWidth / 2) * 50;
        const y = (clientY - innerHeight / 2) / (innerHeight / 2) * 50;
        
        setMousePosition({ x, y });
    }, []);

    // Attach/detach mouse move listener
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);

    // Component for a single particle/icon
    const ParallaxParticle = ({ icon, color, depth, size, position }) => {
        // Calculate translation based on mouse position and depth factor
        const translateX = -mousePosition.x / depth;
        const translateY = -mousePosition.y / depth;

        return (
            <div 
                className={`absolute ${position} ${size} text-5xl opacity-80 transition-transform duration-100 ease-out animate-float pointer-events-none`}
                style={{ 
                    transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                    // Use a theme-aware filter for glow effect
                    filter: 'drop-shadow(0 0 10px rgba(0,255,255,0.6))', 
                }}
            >
                <span className={color} role="img" aria-label="Icon">{icon}</span>
            </div>
        );
    };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center 
                 bg-gray-900 dark:bg-gray-900
                 text-white dark:text-white-900 p-10 sm:p-6 lg:p-8 relative overflow-hidden pt-16 perspective-1000 mt-10" // Added pt-16 offset + perspective
    >
      
      {/* 1. Interactive Parallax Particles */}
      {particles.map((p, index) => (
          <ParallaxParticle key={index} {...p} />
      ))}
      
      {/* 2. Central Content Card (Reacts to Parallax slightly) */}
      <div 
      className="relative text-center max-w-5xl px-8 pt-12 pb-16 sm:px-12 sm:pt-16 sm:pb-20
           bg-transparent
           rounded-3xl
           animate-fade-in-up transition-all duration-500 top-24"


        style={{
            // Apply slight counter-parallax to the main card for a central focus effect
            transform: `translate3d(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px, 0)`,
        }}
      >
        
        {/* Profile Image - Theme-aware border */}
        <div className="mb-8 mt-[-100px] sm:mt-[-120px] flex justify-center animate-zoom-in">
          <img 
            src={actualimg} // Placeholder image for safety
            alt="Your Profile" 
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-400 dark:border-blue-600 shadow-xl"
            onError={(e) => { e.target.onerror = null; e.target.src={actualimg} }} // Fallback
          />
        </div>
        

        {/* Intro */}
        <p className="text-xl sm:text-2xl font-medium text-blue-400 dark:text-blue-600 mb-2 animate-fade-in mt-[-20px]">
          Hello, I am
        </p>

        {/* Name - Gradient Text */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-6 
                       text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 
                       dark:from-blue-600 dark:via-cyan-600 dark:to-green-600
                       animate-slide-in-top">
         Shubhanshu
        </h1>

        {/* Animating Tagline - Using custom AnimatedText component */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-100 dark:text-white mb-8 h-16 sm:h-auto flex justify-center items-center flex-wrap animate-fade-in-delay">
          I'm a&nbsp; 
          <AnimatedText />
        </h2>
        
        {/* Short Bio/Summary */}
        <p className="text-lg text-gray-400 dark:text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-slow">
          I specialize in creating robust, scalable, and user-friendly web solutions. I turn innovative ideas into practical, high-performance products using the MERN stack.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up-buttons">
          <a
            href="#about"
            className="px-10 py-4 text-lg font-bold rounded-xl bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-105 active:scale-95"
          >
            View My Work
          </a>
          <a
            href="/path/to/your/resume.pdf" 
            download
            className="px-10 py-4 text-lg font-bold rounded-xl border-2 border-green-500 text-green-400 dark:border-green-600 dark:text-green-600 hover:bg-green-500 hover:text-white transition duration-300 transform hover:scale-105 active:scale-95"
          >
            Download Resume
          </a>
        </div>
      </div>

        {/* Global Styles for Custom Animations */}
        <style jsx="true">{`
            @keyframes float {
                0% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-10px) rotate(1deg); }
                100% { transform: translateY(0px) rotate(0deg); }
            }
            .animate-float {
                animation: float 6s ease-in-out infinite;
            }
            .animate-float:nth-child(2) { animation-duration: 7s; animation-delay: 1s; }
            .animate-float:nth-child(3) { animation-duration: 5s; animation-delay: 2s; }
            .animate-float:nth-child(4) { animation-duration: 8s; animation-delay: 0.5s; }
            .animate-float:nth-child(5) { animation-duration: 5.5s; animation-delay: 3s; }

            .perspective-1000 {
                transform-style: preserve-3d;
            }
        `}</style>
    </section>
  );
};


export default Hero



