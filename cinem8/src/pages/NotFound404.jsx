import React from "react";
import { Link } from "react-router-dom";

const NotFound404 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-rose-600 mb-4">
                404
            </h1>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Scene Not Found
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md">
                It looks like this movie scene was cut from the final edit. Let's get you back to the premiere.
            </p>
            <Link
                to="/"
                className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate font-bold rouned-full hover:bg-violet-600 dark:hover:bg-slate-200 transition-colors shadow-lg"
            >
                Bacl to Home
            </Link>
        </div>
    );
};

export default NotFound404;