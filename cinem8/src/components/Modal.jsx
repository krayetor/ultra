import React, { useEffect, useRef } from "react";

const Modal = ({ isOpen, onclose, children, title = "Details" }) => {
    const modalRef = useRef();

    // handle keyboard event (esc to close)
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && isOpen) {
                onclose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onclose]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100 flex items-center justify-center p-4"
            onClick={onclose}
        >
            {/*modal content container */}
            <div
                ref={modalRef}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden transform transition-all border border-gray-200 dark:border-slate-800"
                onClick={(e) => e.stopPropagation()}
            >
                {/* header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50 dark:bg-slate-900">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {title}
                    </h3>

                    {/* close button */}
                    <button
                        onClick={onclose}
                        className="text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                {/* child content (movie details) */}
                <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
                    {children}
                </div>
            </div>
        
        </div>
    );
};

export default Modal;