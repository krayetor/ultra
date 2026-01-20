import React, { useRef } from 'react';
import { toPng } from 'html-to-image';
import { getPayoutDates } from '../utils/payoutLogic';

const ResultCard = ({ amount, username, darkMode }) => {
  const receiptRef = useRef(null);
  const dates = getPayoutDates();

  const handleDownload = async () => {
    if (receiptRef.current === null) return;

    // We capture with a 2x pixel ratio for high-definition (Retina) quality
    const dataUrl = await toPng(receiptRef.current, { 
      cacheBust: true, 
      pixelRatio: 2,
      backgroundColor: darkMode ? '#050505' : '#fcfcfc' 
    });
    
    const link = document.createElement('a');
    link.download = `X-Payout-${username}.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="w-full mt-6">
      {/* EXPORTABLE AREA - This is what becomes the PNG */}
      <div 
        ref={receiptRef}
        className={`p-10 rounded-[40px] relative overflow-hidden border ${
          darkMode 
            ? 'bg-[#050505] border-white/10' 
            : 'bg-[#fcfcfc] border-black/10'
        }`}
      >
        {/* Subtle Background Watermark */}
        <div className="absolute -right-8 -bottom-6 opacity-[0.04] pointer-events-none transform -rotate-12 select-none">
          <h1 className={`text-8xl font-black ${darkMode ? 'text-white' : 'text-black'}`}>
            ENGINE
          </h1>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-2">
            Verified Forecast
          </span>
          
          <h2 className={`text-5xl font-light tracking-tighter mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
            ${amount}
          </h2>

          <div className="w-full space-y-4 pt-6 border-t border-dashed border-zinc-500/20">
            <div className="flex justify-between items-center">
              <span className="text-[9px] uppercase tracking-widest opacity-40">Next Payout</span>
              <span className="text-xs font-mono font-bold text-sky-500">{dates.next}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[9px] uppercase tracking-widest opacity-40">X Handle</span>
              <span className={`text-xs font-mono ${darkMode ? 'text-white' : 'text-black'}`}>@{username}</span>
            </div>
          </div>
        </div>
      </div>

      {/* BUTTONS - Not included in PNG */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <button 
           className={`py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest ${
             darkMode ? 'bg-white/5 text-white' : 'bg-black/5 text-black'
           }`}
           onClick={() => window.open(`https://twitter.com/intent/tweet?text=Estimated payout: $${amount}`, '_blank')}
        >
          Share to X
        </button>
        <button 
          onClick={handleDownload}
          className="py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest bg-sky-500 text-white shadow-lg shadow-sky-500/20"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default ResultCard;