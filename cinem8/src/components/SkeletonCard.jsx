import React from "react";

const SkeletonCard = () => {
    
    return (
        <div 
            className="bg-white dark:bg-slate-800 rounded-[20px] shadow-lg overflow-hidden animate-pulse flex flex-col p-2.5"
            style={{  width: '294px', height: '339px' }}
        >
            {/* poster placeholder */}
            <div className="w-[274px] h-[205px] bg-gray-200 dark:bgslate-700 rounded-xl" />

            {/* content lines */}
            <div className="flex flex-col justify-center grow px-1 pt-3  h-[103px] space-y-3 gap-8">
                
                {/* title + star */}
                <div className="flex justify-between items-start">
                    <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded w-3/4" />
                    <div className="h-6 w-6 bg-gray-200 dark:bg-slate-700 rounded-full" />
                </div>
                
                <div className="space-y-4 pt-1">
                    {/* date */}
                    <div className="h-3 mb-2 bg-gray-200 dark:bg-slate-700 rounded w-1/2" />

                    {/* ratings */}
                    <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded w-1/3" />
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;