import ProjectCard from './ProjectCard.jsx'

const projectsData = [
    { 
        id: 1, 
        name: 'E-commerce Platform', 
        description: 'A full-stack e-commerce application with secure payment integration, user authentication, and a dedicated admin dashboard for product and order management.', 
        tech: ['React', 'Node/Express', 'MongoDB', 'Stripe', 'Redux'],
        link: '#ecommerce-live-demo',
        repo: '#ecommerce-repo',
        imageUrl: 'https://placehold.co/600x400/1e40af/ffffff?text=E-Commerce+Mockup',
    },
    { 
        id: 2, 
        name: 'Real-time Chat App', 
        description: 'A scalable chat application supporting one-on-one messaging, group chats, and real-time notifications using web sockets.', 
        tech: ['React', 'Node/Express', 'MongoDB', 'Socket.io', 'JWT'],
        link: '#chat-live-demo',
        repo: '#chat-repo',
        imageUrl: 'https://placehold.co/600x400/065f46/ffffff?text=Chat+App+Mockup',
    },
    { 
        id: 3, 
        name: 'Task Management Tool', 
        description: 'A productivity tool with drag-and-drop features, priority tagging, and secure user authentication to manage personal and team tasks.', 
        tech: ['React', 'Node/Express', 'MongoDB', 'DND-Kit', 'Tailwind CSS'],
        link: '#task-live-demo',
        repo: '#task-repo',
        imageUrl: 'https://placehold.co/600x400/7c3aed/ffffff?text=Task+Manager+Mockup',
    },
    { 
        id: 3, 
        name: 'Task Management Tool', 
        description: 'A productivity tool with drag-and-drop features, priority tagging, and secure user authentication to manage personal and team tasks.', 
        tech: ['React', 'Node/Express', 'MongoDB', 'DND-Kit', 'Tailwind CSS'],
        link: '#task-live-demo',
        repo: '#task-repo',
        imageUrl: 'https://placehold.co/600x400/7c3aed/ffffff?text=Task+Manager+Mockup',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 bg-gray-950 text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                    Latest Works & Projects
                </h2>
                <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                    A selection of full-stack applications built using the MERN stack, demonstrating scalable architecture and modern development practices.
                </p>

                {/* Projects Zig-Zag Layout */}
                <div className="space-y-4">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects