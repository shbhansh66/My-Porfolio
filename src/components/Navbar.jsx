import { useState } from "react";
const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-30 top-0 
                        bg-gray-900 bg-opacity-90 dark:bg-white dark:bg-opacity-95 
                        backdrop-blur-md shadow-lg transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo/Name */}
                    <a href="#hero" className="flex-shrink-0 text-xl font-bold 
                                              text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400
                                              dark:from-blue-600 dark:to-cyan-600">
                        [Your Name]
                    </a>

                    {/* Desktop Navigation Links and Theme Toggle */}
                    <div className="hidden md:flex space-x-6 items-center">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-green-400 
                                           dark:text-gray-700 dark:hover:text-blue-600
                                           transition duration-150 font-medium tracking-wide border-b-2 border-transparent hover:border-green-400 dark:hover:border-blue-600 pb-1"
                            >
                                {item.name}
                            </a>
                        ))}
                        
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle dark/light mode"
                            className="p-2 ml-4 rounded-full text-gray-300 hover:text-green-400 
                                       dark:text-gray-800 dark:hover:text-blue-600 
                                       transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-blue-600"
                        >
                            {theme === 'dark' ? (
                                // Sun Icon (visible in dark mode)
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            ) : (
                                // Moon Icon (visible in light mode)
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                         {/* Theme Toggle for Mobile */}
                         <button
                            onClick={toggleTheme}
                            aria-label="Toggle dark/light mode"
                            className="p-2 mr-2 rounded-full text-gray-300 hover:text-green-400 
                                       dark:text-gray-800 dark:hover:text-blue-600 
                                       transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-blue-600"
                        >
                             {theme === 'dark' ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                            )}
                        </button>
                        
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md 
                                       text-gray-400 hover:text-white hover:bg-gray-700 
                                       dark:text-gray-600 dark:hover:text-gray-900 dark:hover:bg-gray-200 
                                       focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400 dark:focus:ring-blue-600"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger Icon */}
                            {!isOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                /* Close Icon (X) */
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)} // Close menu on click
                            className="block px-3 py-2 rounded-md text-base font-medium 
                                       text-gray-300 hover:bg-gray-700 hover:text-white 
                                       dark:text-gray-700 dark:hover:bg-gray-200 dark:hover:text-gray-900
                                       transition duration-150"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar