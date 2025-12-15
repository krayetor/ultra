import React from "react";

const AboutPage = () => {
    return (
        <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-4">
                    About <span className="text-violet-600">8</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                    A modern, cinematic movie database application bbuilt for speed and aesthetics.
                </p>
            </div>

            {/* content grrid */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        The Mission
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 loading-relaxed">
                        Cinem8 was designed to provide a seamless, app-like experience on the web.
                        Moving away from cluttered interfaces, we focus on what matters: the content.
                        Powered by the TMDB API, its provides real-time access to millions of movie.
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                        Tech Stack
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-voilet-600 rounded-full mr-3"></span>
                            <span className="text-slate-700 dark:text-slate-300"><strong>React 18</strong> (Vite)</span>
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-voilet-600 rounded-full mr-3"></span>
                            <span className="text-slate-700 dark:text-slate-300"><strong>Tailwind CSS</strong> (Styling)</span>
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-voilet-600 rounded-full mr-3"></span>
                            <span className="text-slate-700 dark:text-slate-300"><strong>Axios</strong> (Data Fetching))</span>
                        </li><li className="flex items-center">
                            <span className="w-2 h-2 bg-voilet-600 rounded-full mr-3"></span>
                            <span className="text-slate-700 dark:text-slate-300"><strong>TMDB API</strong> (Dark Source)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;