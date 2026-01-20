import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiBuymeacoffee } from 'react-icons/si';

const SocialDock = ({ darkMode }) => {
  const baseIconClass =
    'w-5 h-5 transition-all duration-500 group-hover:scale-110';

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[999] w-auto">
      <div
        className={`flex items-center gap-8 px-8 py-4 rounded-full border backdrop-blur-2xl transition-all duration-500 group/dock ${
          darkMode
            ? 'bg-black/40 border-white/10 shadow-[]0_20px_50px_rgba(0,0,0,0.5)] hover:border-white/20'
            : 'bg-white/40 border-black/10 shadow-[]0_20px_50px_rgba(0,0,0,0.1)] hover:border-black/10'
        }`}
      >
        {/* GitHub */}
        <a
          href="https://github.com/krayetor"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center"
        >
          <FaGithub
            className={`${baseIconClass} ${
              darkMode ? 'text-white' : 'text-black'
            } group-hover:text-[#02fd6b]`}
          />
        </a>

        {/* X (current logo) */}
        <a
          href="https://x.com/krayetor"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center"
        >
          <FaXTwitter
            className={`${baseIconClass} ${
              darkMode ? 'text-white' : 'text-black'
            } group-hover:text-sky-500`}
          />
        </a>

        {/* Buy Me a Coffee */}
        <a
          href="https://buymeacoffee.com/krayetor"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center"
        >
          <SiBuymeacoffee
            className={`${baseIconClass} ${
              darkMode ? 'text-white' : 'text-black'
            } group-hover:text-[#FFDD00]`}
          />
        </a>
      </div>
    </div>
  );
};

export default SocialDock;
