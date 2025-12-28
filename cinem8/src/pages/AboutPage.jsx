import React from "react";

const AboutPage = () => {
    return (
        <div className="w-full min-h-screen flex justify-center py-12 md:py-20">
            
            <div className="w-full max-w-6xl mx-auto px-2">

                <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-slate-700 p-8 md:p-12 space-y-12 transition-colors duration-300">

                    <section className="pt-4">
                        <h1 className="text-3xl text-left md:text-4xl font-bold text-slate-900 dark:text-white mb-4 pb-3">
                            About Cinem<span className="text-violet-600">8</span>
                        </h1>
                        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                            Project Overview
                        </h2>
                        <p className="text-xl text-left text-slate-600 dark:text-slate-400">
                            Cinem8 is your sleek, instant Cinema Mate, a modern web application designed to
                            be the fastest way to find comprehensive details about movies. Built as a Capstone
                            Project by me through the ALX Frontend Web Development Program, the application
                            prioritizes speed, data persistence, and a highly polished user interface over unnecessary features.
                        </p>
                    </section>

                    <section className="pt-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Design Philosophy
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed pt-2">
                            The design is rooted in the principle of utility and minimalism. I opted for a
                            dark-mode-first aesthetic and utilized Tailwind CSS to achieve a crisp, professional
                            look inspired by modern developer tools and high-end utility applications.
                        </p>
                    </section>

                    {/* key features */}
                    <section className="pt-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Key Features
                        </h2>
                        <ul className="space-y-4 text-slate-600 dark:text-slate-400 list-disc list-inside marker:text-violet-600 pt-2">
                            <li className="pl-2 pb-1">
                                <span className="font-semibold text-slate-800 dark:text-slate-200">Sleek Interactions:</span> Features such as skeleton and dual-loading hover transition provide satisfying, premium user feedback.
                            </li>
                            <li className="pl-2 pb-1">
                                <span className="font-semibold text-slate-800 dark:text-slate-200">Deep Persistence:</span> All critical user data your theme preference, search history, and favorite movie list is stored locally to ensure a seamless experience, even after a page refresh or closing the browser.
                            </li>
                            <li className="pl-2 pb-1">
                                <span className="font-semibold text-slate-800 dark:text-slate-200">Persistent Search:</span> The current search query is stored directly in the URL, allowing users to easily share or bookmark their search results.
                            </li>
                            <li className="pl-2 pb-1">
                                <span className="font-semibold text-slate-800 dark:text-slate-200">Unified Data:</span> Movie data, ratings, plots, and metadata are sourced efficiently from the public TMDB API (The Movie Database).
                            </li>
                        </ul>
                    </section>

                    {/* tech stack */}
                    <section className="pt-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Technology Stack & Source
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-300 dark:border-slate-600 transition-colors duration-300">
                                        <th className="py-3 font-bold text-slate-900 dark:text-white w-1/4">Category</th>
                                        <th className="py-3 font-bold text-slate-900 dark:text-white w-1/4">Technology</th>
                                        <th className="py-3 font-bold text-slate-900 dark:text-white w-1/4">Purpose</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-600 dark:text-slate-300 text-sm md:text-base">
                                    <tr className="border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
                                        <td className="py-4 font-medium">Framework</td>
                                        <td className="py-4">React.js</td>
                                        <td className="py-4">Used for building a modular UI with functional components and Hooks.</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
                                        <td className="py-4 font-medium">Styling</td>
                                        <td className="py-4">Tailwind CSS</td>
                                        <td className="py-4">Used for rapid, utility first styling and robust responsive design.</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
                                        <td className="py-4 font-medium">Routing</td>
                                        <td className="py-4 duration-300">React Router DOM</td>
                                        <td className="py-4 duration-300">Manages application views and URL parameter persistence.</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
                                        <td className="py-4 font-medium">API</td>
                                        <td className="py-4">TMDB</td>
                                        <td className="py-4">Provides the comprehensive movie data.</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
                                        <td className="py-4 font-medium">Persistence</td>
                                        <td className="py-4">Browser Local Storage</td>
                                        <td className="py-4">Powers the theme, favorites, and search history features.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* connect with dev */}
                    <section className="pt-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Connect with Developer
                        </h2>
                        <ul className="flex flex-wrap gap-4 pt-4 space-y-2 text-slate-600 dark:text-slate-300">
                            {/* GitHub */}
                            <li className="space-y-4">
                                <a href="https://github.com/krayetor" target="_blank" className="flex items-center group text-slate-600 dark:text-slate-300 hover:text-violet-600 transition-colors duration-300">
                                    <span className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-gray-300 dark:border-slate-700 group-hover:border-violet-200 transition-colors duation-300 mr-3">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </a>
                            </li>

                            {/* X (Twitter) */}
                            <li className="space-y-4">
                                <a href="https://x.com/krayetor" target="_blank" className="flex items-center group text-slate-600 dark:text-slate-300 hover:text-violet-600 transition-colors duration-300">
                                    <span className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-gray-300 dark:border-slate-700 group-hover:border-violet-200 transition-colors duration-300 mr-3">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </span>
                                </a>
                            </li>
                        
                        </ul>
                    </section>

                </div>

            </div>
        </div>
    );
};

export default AboutPage;