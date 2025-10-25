import { useState } from "react";
const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null); // 'success', 'error', 'submitting'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        
        // In a real MERN app, you would use 'fetch' or 'axios' here:
        // const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
        
        // --- SIMULATION of API Call ---
        setTimeout(() => {
            if (formData.name && formData.email && formData.message) {
                console.log('Form Submitted:', formData);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                    Get In Touch
                </h2>
                <p className="text-xl text-gray-400 text-center mb-12">
                    Have a project idea or a job opportunity? Send a message directly!
                </p>

                {/* Contact Form Container */}
                <div className="bg-gray-800 bg-opacity-40 p-8 md:p-12 rounded-3xl border border-gray-700 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
                                placeholder="Your Name"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
                                placeholder="name@example.com"
                            />
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition resize-none"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        {/* Status Message */}
                        {status === 'submitting' && (
                            <p className="text-blue-400 text-center font-medium">Sending your message...</p>
                        )}
                        {status === 'success' && (
                            <p className="text-green-400 text-center font-bold text-lg">Thank you! Your message has been sent successfully.</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-400 text-center font-medium">Failed to send. Please fill out all fields.</p>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full flex justify-center items-center space-x-2 px-6 py-3 text-lg font-bold rounded-xl 
                                       bg-green-600 hover:bg-green-700 transition duration-300 shadow-xl 
                                       transform hover:scale-[1.01] active:scale-[0.99] disabled:bg-gray-500 disabled:cursor-not-allowed"
                        >
                            {/* SVG Icon for Send (Paper Plane) */}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                            <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};


export default Contact