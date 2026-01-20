import React, { useState, useEffect } from "react"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialDock from "./components/SocialDock";
import PredictionInput from "./components/PredictionInput";
import ProfileCard from "./components/ProfileCard";
import ResultCard from "./components/ResultCard";
import './index.css';

function App() {
    const [username, setUsername] = useState(() => {
        return sessionStorage.getItem('last_username') || '';
    });
    
    const [loading, setLoading] = useState(false);

    const [prediction, setPrediction] = useState(() => {
        const saved = sessionStorage.getItem('last_prediction');
        return saved ? JSON.parse(saved): null;
    });
    
    const [darkMode, setDarkMode] = useState(() => {
        // checkk localstorage or system preference immediately on load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    })

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            document.body.style.backgroundColor = '#050505';
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            document.body.style.backgroundColor = '#fcfcfc';
        }
    }, [darkMode]);

    useEffect(() => {
        if (prediction) {
            sessionStorage.setItem('last_prediction', JSON.stringify(prediction));
        }
    }, [prediction]);

    useEffect(() => {
        sessionStorage.setItem('last_username', username);
    }, [username]);

    const handleCalculate = async () => {
        if (!username) return;
        setLoading(true);
        
        try {
            const response = await fetch('http://localhost:5000/api/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username.replace('@', '') })
            });

            const data = await response.json();

            if (data.status === "success") {
                setPrediction(data); // this now contains real amount and real userdata
            } else {
                alert("Engine Error: " + data.message);
            }
        } catch (error) {
            console.error("Connection failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />

            <main className="flex-grow flex items-center justify-center pt-[70px]">
                <div className="w-full max-w-[450px] min-h-[80vh] flex flex-col items-center justify-center px-6 py-12">

                    {/* main card */}
                    <div className={`w-full max-w[450px] rounded-[40px] transition-all duration-500 ease-in-out backdrop-blur-md overflow-hidden ${
                        darkMode
                            ? 'bg-white/[0.03] border border-white/10 shadow-2xl shadow-black' 
                            : 'bg-black/[0.03] border border-black/10 shadow-xl'
                    }`}>

                        <div className="p-8 flex flex-col items-center">
                            <div className="mb-8 text-center">
                                <h1 className={`text-2xl font-semibold tracking-tighter uppercase leading-none ${
                                    darkMode ? 'text-white' : 'text-black'
                                }`}>
                                    Prediction {" "}
                                    <span className="text-sky-500 font-semibold">Engine</span>
                                </h1>
                                <p className={`mt-4 text-[9px] font-bold uppercase tracking-[0.5em] opacity-40 ${
                                    darkMode ? 'text-white' : 'text-black'
                                }`}>
                                    X Payout Forecaster
                                </p>
                            </div>

                            {/* prediction input & future Results */}
                            <PredictionInput
                                username={username}
                                setUsername={setUsername}
                                handleCalculate={handleCalculate}
                                loading={loading}
                                darkMode={darkMode}
                                prediction={prediction}
                            />

                            {prediction && prediction.userData && (
                                <div className="w-full mt-4 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    <ProfileCard 
                                        darkMode={darkMode} 
                                        userData={prediction.userData} 
                                    />
            
                                <ResultCard 
                                    amount={prediction.amount} 
                                    username={prediction.userData.username}
                                    darkMode={darkMode} 
                                />
                                </div>
                            )}

                        </div>
                    </div>

                    <Footer darkMode={darkMode} />
                </div>
            </main>

            <SocialDock darkMode={darkMode} />
        </div>
    )
    
}

export default App;