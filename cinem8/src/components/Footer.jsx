import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 mt-auto transition-colors duration-300">
            
            <div className="w-full max-w-8xl mx-auto px-8 md:px-12 py-12 md:py-16">
                
                {/* brand name */}
                <div className="pb-3">
                    <h2 className="pb-3 text font tracking-[0.2em] text-slate-900 dark:text-white uppercase mb-2">
                        Cinem8
                    </h2>
                    <p className="text text-slate-500 dark:text-slate-400">
                        Building & Exploring the world of cinema through modern technologies.
                    </p>
                </div>

                {/* links */}
                <div className="pt-3 pb-3 flex flex-wrap gap-8 mb-8 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <Link to="/" className="hover:text-violet-600 transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-violet-600 transition-colors">About</Link>
                    <Link to="/favorites" className="hover:text-violet-600 transition-colors">Favorites</Link>
                </div>

                {/* divider */}
                <div className="w-full h-0.5 bg-gray-400 dark:bg-slate-800 mb-8 transition-colors duration-300 rounded-full"></div>

                {/* copyright & social links */}
                <div className="flex flex-wrap justify-between gap-6 pt-3">
                    {/* copyright */}
                    <div className="pt-3 mb- pb-3">
                        <p className="text-nowrap text-slate-500 dark:text-slate-500">
                            &copy; <strong className="text-slate-700 dark:text-slate-300">Cinem8 Technologies.</strong>
                        </p>
                    </div>

                    {/* bottom section */}
                    <div className="flex items-center gap-5">
                        {/* GitHub */}
                        <a href="https://github.com/krayetor" target="_blank" className="flex items-center group text-slate-600 dark:text-slate-300 hover:text-violet-600 transition-colors duration-300">
                            <span className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-gray-300 dark:border-slate-700 group-hover:border-violet-200 transition-colors mr-3 duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </a>
                        
                        {/* X / Twitter */}
                        <a href="https://x.com/krayetor" target="_blank" className="flex items-center group text-slate-600 dark:text-slate-300 hover:text-violet-600 transition-colors duration-300">
                            <span className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-gray-300 dark:border-slate-700 group-hover:border-violet-200 transition-colors mr-3 duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;