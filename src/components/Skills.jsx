const skillsData = [
    {
        category: 'Frontend Development',
        icon: '💻', 
        skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'Redux/Zustand', 'HTML5 & CSS3', 'Tailwind CSS', 'Bootstrap'],
        color: 'border-blue-500',
        bg: 'bg-blue-900',
    },
    {
        category: 'Backend & Runtime',
        icon: '⚙️',
        skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication (JWT)', 'Microservices', 'Unit Testing (Jest)'],
        color: 'border-green-500',
        bg: 'bg-green-900',
    },
    {
        category: 'Database & ORM',
        icon: '💾',
        skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'MySQL', 'Redis (Caching)', 'Firebase/Firestore'],
        color: 'border-red-500',
        bg: 'bg-red-900',
    },
    {
        category: 'DevOps & Tools',
        icon: '🛠️',
        skills: ['Git/GitHub', 'CI/CD (Basic)', 'AWS (S3, EC2)', 'Docker', 'Postman', 'Vercel/Netlify', 'Linux CLI'],
        color: 'border-purple-500',
        bg: 'bg-purple-900',
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                    Technical Skills & Expertise
                </h2>
                <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                    A comprehensive look at the technologies, languages, and tools I use to bring projects to life.
                </p>

                {/* Skills Grid - Responsive 2-column or 4-column layout */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((data, index) => (
                        <div 
                            key={index}
                            className={`p-6 rounded-2xl shadow-xl border-t-4 ${data.color} 
                                      bg-gray-800/50 backdrop-blur-sm transition duration-300 
                                      hover:scale-[1.02] hover:shadow-2xl`}
                        >
                            <div className="flex items-center mb-4">
                                <span className="text-4xl mr-3">{data.icon}</span>
                                <h3 className={`text-2xl font-bold text-gray-100`}>
                                    {data.category}
                                </h3>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700">
                                {data.skills.map((skill, sIndex) => (
                                    <span 
                                        key={sIndex} 
                                        className={`px-3 py-1 text-sm font-medium rounded-full 
                                                  ${data.bg} text-white/90 border border-current transition duration-200 
                                                  hover:bg-opacity-70 hover:scale-105`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills