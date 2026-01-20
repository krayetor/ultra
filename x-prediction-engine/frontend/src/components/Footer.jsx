import React from "react";

const Footer = ({ darkMode }) => {
    return (
        <footer className="mt-auto py-12 flex flex-col items-center justify-center">
            
            <div className={`text-[9px] font-black uppercase tracking-[0.5em] text-center mb-6 ${
                darkMode ? 'text-zinc-800' : 'text-zinc-200'
            }`}>
                X-PREDICTION ENGINE
            </div>

            <div className="flex flex-col items-center space-y-3 px-6">
                {/* message */}

                <p className={`text-[8px] text-center font-bold uppercase tracking-[0.2em] ${
                    darkMode ? 'text-sky-900/50' : 'text-sky-600/50'
                }`}>
                    System Note: Prediction copies are retained to enhance engine accuracy.
                </p>

                <p className={`text-[10px] text-center max-w-[320px] leading-relaxed font-medium ${
                    darkMode ? 'text-zinc-600' : 'text-zinc-400'
                }`}>
                    Disclaimer: This tool estimates potential ad-revenue share based on public engagement metrics and RapidAPI datasets.
                </p>

                <p className={`text-[9px] text-center font-black uppercase tracking-widest ${
                    darkMode ? 'text-zinc-700' : 'text-zinc-500'
                }`}>
                    Not Affiliated to X Corp.
                </p>

            </div>

        </footer>
    );
};

export default Footer;