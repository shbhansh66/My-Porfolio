const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zM.001 24h4.999v-18h-4.999v18zM17.994 8.5c-1.381 0-2.484.774-3.085 1.764v-1.264h-4.999v18h4.999v-10c0-2.77 1.55-4.285 3.514-4.285 1.932 0 3.39 1.432 3.39 4.295v9.99h4.999v-10c0-6.19-3.5-9.11-8.825-9.11z"></path></svg>
    )},
    { name: 'GitHub', url: '#', icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.693.084-.693 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.292-1.552 3.301-1.23 3.301-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.197-6.095 8.197-11.389 0-6.627-5.373-12-12-12z"></path></svg>
    )},
    { name: 'Twitter', url: '#', icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.164-2.722-.951.565-2.005.974-3.127 1.195-.89-.959-2.173-1.554-3.593-1.554-3.484 0-6.307 2.823-6.307 6.307 0 .497.056.983.167 1.45-5.242-.263-9.888-2.788-13.006-6.611-.542.937-.852 2.03-.852 3.2 0 2.193 1.115 4.13 2.808 5.263-.827-.024-1.604-.251-2.288-.636v.079c0 3.062 2.184 5.617 5.093 6.195-.53.143-1.09.221-1.666.221-.407 0-.806-.038-1.194-.117.803 2.518 3.145 4.343 5.932 4.394-2.169 1.7-4.904 2.716-7.876 2.716-.511 0-1.013-.037-1.503-.088 2.823 1.797 6.166 2.848 9.77 2.848 11.728 0 18.175-9.761 18.175-18.232 0-.279-.006-.557-.015-.833.993-.719 1.859-1.651 2.559-2.671z"></path></svg>
    )},
];

const Footer = () => {
    return (
        <footer className="bg-gray-950 border-t border-gray-800 text-gray-400 py-10 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                
                {/* Copyright/Signature */}
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} [Your Full Name]. All rights reserved.
                </p>

                {/* Navigation Links */}
                <div className="flex space-x-6 text-sm">
                    <a href="#about" className="hover:text-green-400 transition">About</a>
                    <a href="#projects" className="hover:text-green-400 transition">Projects</a>
                    <a href="#contact" className="hover:text-green-400 transition">Contact</a>
                    <a href="/path/to/privacy.html" className="hover:text-green-400 transition">Privacy</a>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-5">
                    {socialLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110"
                            aria-label={link.name}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer 