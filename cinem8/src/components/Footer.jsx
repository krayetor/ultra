import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 mt-auto  duration-300">
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">

                    {/* brand name */}
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tighter">
                            cinem<span className="text-violet-600">8</span>
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                            The cinematic database experience.
                        </p>
                    </div>

                    {/* nav links */}
                    <div className="flex space-x-6 text-sm font-medium text-slate-600 dark:text-slate-400">
                        <Link to="/" className="hover:text-violet-600 dark:hover:text-white transition-colors p-2">Home</Link>
                        <Link to="/about" className="hover:text-violet-600 dark:hover:text-white transition-colors p-2">About</Link>
                        <Link to="/favorites" className="hover:text-violet-600 dark:hover:text-white transition-colors p-2">Favorites</Link>
                    </div>

                    {/* copyright */}
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                        &copy; {new Date().getFullYear()} Cinem8. All rights reserved. 
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;