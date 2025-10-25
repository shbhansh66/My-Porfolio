const ProjectCard = ({ project, index }) => {
    // Check if the project should be on the right (odd index) or left (even index)
    const isEven = index % 2 === 0;

    return (
        <div 
            className={`flex flex-col md:flex-row items-center gap-10 lg:gap-20 py-12 lg:py-16 
                       border-b border-gray-700/50 last:border-b-0 
                       transition duration-500 ease-in-out transform hover:bg-gray-800/20 rounded-2xl p-4 md:p-0`}
        >
            
            {/* Image/Mockup Column - Order changes based on index for Zig-Zag effect */}
            <div className={`w-full md:w-1/2 p-4 relative flex justify-center 
                             ${isEven ? 'order-1' : 'order-1 md:order-2'}`}>
                {/* Simulated Laptop Mockup Effect */}
                <div className="relative w-full max-w-lg lg:max-w-xl aspect-video bg-gray-900 border-[8px] border-gray-700 rounded-2xl shadow-[0_0_40px_rgba(0,180,255,0.4)] overflow-hidden transition-all duration-500 hover:shadow-cyan-500/50">
                    <img
                        src={project.imageUrl}
                        alt={`${project.name} Mockup`}
                        className="w-full h-full object-cover transition duration-500 hover:scale-[1.05]"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/1e40af/ffffff?text=Mockup"; }}
                    />
                    {/* Laptop stand visual effect */}
                    <div className="absolute inset-x-0 bottom-[-10px] h-3 bg-gray-800 rounded-b-lg"></div>
                </div>
            </div>

            {/* Text Content Column - Order changes based on index for Zig-Zag effect */}
            <div className={`w-full md:w-1/2 p-4 ${isEven ? 'order-2' : 'order-2 md:order-1'} text-center md:text-left`}>
                
                <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
                    {project.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className={`flex flex-wrap gap-2 mb-8 ${isEven ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
                    {project.tech.map((tech, sIndex) => (
                        <span 
                            key={sIndex} 
                            className="px-3 py-1 text-sm font-medium rounded-full bg-green-600 bg-opacity-30 text-green-300 border border-green-500 border-opacity-50 transition hover:bg-green-700 hover:bg-opacity-50"
                        >
                            #{tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className={`flex space-x-4 ${isEven ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
                    <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 text-base font-bold rounded-xl bg-blue-600 hover:bg-blue-700 transition duration-200 transform hover:scale-105"
                    >
                        {/* Live Demo Icon */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        <span>View Live</span>
                    </a>
                    <a 
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 text-base font-bold rounded-xl border-2 border-gray-500 text-gray-300 hover:bg-gray-700 transition duration-200 transform hover:scale-105"
                    >
                        {/* GitHub Icon */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3m0 0l3-3m-3 3v4m6 7a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v10z"></path></svg>
                        <span>Codebase</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
 export default ProjectCard