import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import ResultCard from "./ResultCard";

const PredictionInput = ({ username, setUsername, handleCalculate, loading, darkMode, prediction }) => {

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const exampleHandles = ["krayetor", "elonmusk", "payout_king", "nikitabier"];
    const [isTyping, setIsTyping] = useState(false);

    // typewriter logic
    useEffect(() => {
        if (username) return; // stops typewriter if user is typing

        setIsTyping(true);
        const typingTimeout = setTimeout(() => setIsTyping(false), 100);

        if (subIndex === exampleHandles[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 2000);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % exampleHandles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 40 : 80);

        return () => {
            clearTimeout(timeout)
            clearTimeout(typingTimeout);
        };
    }, [subIndex, index, reverse, username])

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="relative w-full">

                {/* example: @handles label that appears when typing or focused */}
                <div className={`absolute -top-7 left-0 transition-all duration-500 ease-out z-20 ${
                    username || isFocused ? 'opacity-40 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                    <span className={`text-[10px] font-semibold uppercase tracking-widest ${
                        darkMode ? 'text-white' : 'text-black'
                    }`}>
                        Suggested: <span className="text-sky-500 lowercase">@{exampleHandles[index]}</span>
                    </span>
                </div>

                <div className="p-1.5"></div>

                {/* input field with focus glow */}
                <div className={`relative transition-all duration-500 rounded-2xl border ${
                    isFocused
                        ? 'border-sky-500/50 shadow-[0_0_20px_rgba(14,165,233,0.15)] scale-[1.01]'
                        : darkMode ? 'border-white/5 bg-white/[0.02]' : 'border-black/5 bg-black/[0.02]' 
                }`}>
                    <input
                        type="text"
                        value={username}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
                        className={`w-full bg-transparent pl-6 pr-4 py-5 outline-none font-medium text-[16px] transition-all relative z-10 ${
                            darkMode ? 'text-white' : 'text-black'
                        }`}
                    />

                    {/* typewriter placeholder - visible only when input is empty */}
                    {!username && (
                        <div className="absolute left-[25px] top-1/2 -translate-y-1/2 pointer-events-none opacity-30 font-medium flex items-center">
                            <span className={darkMode ? 'text-zinc-400' : 'text-zinc-500'}>
                                @{exampleHandles[index].substring(0, subIndex)}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* action button */}
            <button
                onClick={handleCalculate}
                disabled={loading || !username}
                className={`w-full py-5 rounded-2xl font-black text-[11px] tracking-[0.5em] uppercase transition-all active:scale-[0.97] disabled:opacity-30 disabled:grayscale ${
                    darkMode
                        ? 'bg-white text-black hover:bg-zinc-200'
                        : 'bg-black text-white hover:bg-zinc-800'
                }`}
            >
                {loading ? (
                    <span className="flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:0.3s]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:0.15s]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce"></span>
                    </span>
                ) : (
                    'Initiate Analysis'
                )}
            </button>

            {prediction && prediction.userData && (
                <div className="mt-4 pt-8 border-t border-dashed border-zinc-500/100animate-in fade-in zoom-in duration-700">

                    {/* real profile card  from serrver data */}
                    <ProfileCard
                        darkMode={darkMode}
                        userData={prediction.userData}
                    />

                    {/* real result card with calculated amount */}
                    <ResultCard
                        amount={prediction.amount}
                        username={prediction.userData.username}
                        darkMode={darkMode}
                    />
                    
                </div>
            )}
        </div>
    );
};

export default PredictionInput;