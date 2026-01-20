import React from 'react';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-[998] h-[70px] flex items-center transition-all duration-500 backdrop-blur-md ${
      darkMode 
        ? 'bg-[#050505]/80 border-b border-white/10' 
        : 'bg-[#fcfcfc]/80 border-b border-black/10'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between w-full">
        
        {/* Branding Section with Tilted X */}
        <div className="flex items-center gap-3">
          {/* Tilted X Logo */}
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
            darkMode ? 'bg-white' : 'bg-black'
          }`}>
            <svg 
              viewBox="0 0 24 24" 
              className={`w-7 h-7 transform -rotate-16 transition-colors ${
                darkMode ? 'fill-black' : 'fill-white'
              }`}
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </div>

          <div className="flex flex-col">
            <h1 className={`text-[18px] font-semibold uppercase tracking-wide leading-none ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              Prediction <span className="font-semibold">Engine</span>
            </h1>
            <span className="text-[9px] font-bold text-sky-500 tracking-[0.3em] uppercase mt-1">
              Real-time Analysis
            </span>
          </div>
        </div>

        {/* Theme Toggle */}
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className={`group flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-[10px] font-bold uppercase tracking-widest ${
            darkMode 
              ? 'border-white/10 text-white hover:bg-white/5' 
              : 'border-black/10 text-black hover:bg-black/5'
          }`}
        >
          {darkMode ? 'Light' : 'Dark'}
          <span className="text-xs ml-1">{darkMode ? '☼' : '☾'}</span>
        </button>

      </div>
    </header>
  );
};

export default Header;