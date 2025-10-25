import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const bioParagraphs = [
        "I don't just write code; I **architect** solutions. As a dedicated Full-Stack Engineer with **2+ years of hands-on MERN experience**, my mission is to transform complex challenges into intuitive, scalable web applications. I thrive on bringing ideas from concept to deployment. 🚀",
        "My expertise lies in orchestrating the seamless synergy between a lightning-fast **React** frontend (leveraging modern hooks and state management like Zustand) and a powerful **Node.js/Express** backend. I am dedicated to creating clean, performant, and secure APIs.",
        "Beyond the core stack, I am committed to **continuous growth**. Whether it's optimizing database queries, implementing robust unit tests, or diving into DevOps and cloud services, I focus on delivering long-term value and contributing meaningfully to team success.",
    ];

    const highlights = [
        { text: 'Designed and implemented 10+ robust RESTful APIs for core application logic.', icon: '💡' },
        { text: 'Achieved significant performance boosts using advanced React optimization techniques.', icon: '⚡️' },
        { text: 'Deployed and maintained applications using AWS services and Docker for full lifecycle management.', icon: '☁️' },
    ];

    // Animation variants for staggered appearance
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, rotateX: -90 }, // RotateX for 3D flip effect
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const highlightItemVariants = {
        hidden: { opacity: 0, x: -50, rotateY: -90 }, // RotateY for side flip
        visible: { 
            opacity: 1, 
            x: 0, 
            rotateY: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            }
        },
    };

    const skillTagVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    };

    return (
        <section id="about" className="py-20 px-4 bg-gray-900 text-white overflow-hidden mt-10"> {/* overflow-hidden to prevent scroll issues */}
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    My Architectural Approach
                </motion.h2>

                {/* Two-Column Layout with Glassmorphism */}
                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center bg-gray-800 bg-opacity-30 p-8 rounded-3xl border border-gray-700 border-opacity-50 backdrop-blur-xl shadow-2xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% visible
                    variants={containerVariants}
                >
                    {/* Left Column: Text Content (Narrative) */}
                    <motion.div variants={containerVariants}> {/* Apply container variants to this div as well */}
                        {bioParagraphs.map((paragraph, index) => (
                            <motion.p 
                                key={index} 
                                className="text-lg text-gray-300 mb-6 leading-relaxed"
                                variants={itemVariants} // Each paragraph animates
                                dangerouslySetInnerHTML={{ __html: paragraph }} // Use dangerouslySetInnerHTML for ** bolding
                            />
                        ))}
                    </motion.div>

                    {/* Right Column: Key Highlights & Stack Overview */}
                    <div className="p-8 bg-gray-700 bg-opacity-40 rounded-2xl shadow-inner border border-gray-600">
                        <motion.h3
                            className="text-3xl font-bold text-center text-green-400 mb-6 border-b border-gray-600 pb-3"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Key Achievements & Strengths
                        </motion.h3>
                        
                        {/* Highlights List */}
                        <motion.div className="space-y-4 mb-8" variants={containerVariants}>
                            {highlights.map((item, index) => (
                                <motion.div 
                                    key={index} 
                                    className="flex items-start space-x-3 p-3 bg-gray-800 rounded-lg transition duration-200 hover:shadow-lg hover:bg-gray-700/60"
                                    variants={highlightItemVariants} // Each highlight item animates
                                >
                                    <span className="text-xl mt-0.5" role="img" aria-label="Icon">{item.icon}</span>
                                    <p className="text-gray-200 text-lg font-medium">
                                        {item.text}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Quick Stack Summary */}
                        <motion.h4 
                            className="text-xl font-semibold text-blue-400 mb-4 pt-4 border-t border-gray-600"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >My Go-To Development Stack</motion.h4>
                        <motion.div className="flex flex-wrap gap-3 text-center" variants={containerVariants}>
                            {['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redux/Zustand', 'Tailwind CSS', 'AWS', 'Docker'].map((skill, index) => (
                                <motion.span 
                                    key={index} 
                                    className="bg-blue-600 bg-opacity-70 text-white font-medium px-3 py-1 rounded-full text-sm transform transition duration-200 hover:scale-105 hover:bg-blue-500 shadow-md"
                                    variants={skillTagVariants} // Each skill tag animates
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;