import React, { useState, useEffect, useCallback } from 'react';
// Note: Removed import { TypeAnimation } from 'react-type-animation'; to fix build error

// --- Custom Animated Text Component (Replaces TypeAnimation) ---
const roles = ['MERN Stack Developer', 'Full-Stack Engineer', 'Backend Builder', 'Frontend Enthusiast'];
const AnimatedText = () => {
    const [index, setIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    // New state to manage the flip/roll transition (the visual effect)
    const [isFlipping, setIsFlipping] = useState(false); 
    
    const TYPING_SPEED = 100; // Speed for typing characters
    const PAUSE_DURATION = 1500; // Pause at the end (1.5 seconds)
    const FLIP_DURATION = 500; // Duration of the visual flip effect

    const fullText = roles[index % roles.length];
    
    // Typing and Flipping logic
    useEffect(() => {
        let timer;
        
        // 1. Typing Phase
        if (currentText.length < fullText.length && !isFlipping) {
            timer = setTimeout(() => {
                // Add the next character
                setCurrentText(fullText.substring(0, currentText.length + 1));
            }, TYPING_SPEED);
        
        // 2. Pause and Initiate Flip
        } else if (currentText.length === fullText.length && !isFlipping) {
            // Pause before starting the flip transition
            timer = setTimeout(() => {
                setIsFlipping(true); // Start the visual exit
            }, PAUSE_DURATION);

        // 3. Complete Flip and Reset for Next Text
        } else if (isFlipping) {
            // Wait for the duration of the CSS transition (0.5s)
            timer = setTimeout(() => {
                // Instantaneously switch content and reset the flip state
                setIndex(index + 1);
                setCurrentText(''); 
                setIsFlipping(false); 
            }, FLIP_DURATION);
        }

        return () => clearTimeout(timer);
    }, [currentText, isFlipping, fullText, index]);

    // Use Tailwind classes for the flip/roll effect:
    // transition duration-500: Enables smooth animation over 500ms
    // translate-y-[100%] (or translate-y-0): Controls the vertical position
    const flipClass = isFlipping ? 'translate-y-full opacity-0.5' : 'translate-x-0 opacity-100';

    return (
        <span className="relative inline-block overflow-hidden h-8 md:h-10">
            <span className={`inline-block whitespace-nowrap transition duration-500 ease-in-out ${flipClass}`}>
                <span className="text-amber-400 font-extrabold border-r-4 border-white pr-2 shadow-lg shadow-amber-400/50 ">
                    {currentText}
                </span>
            </span>
        </span>
    );
};

export default AnimatedText