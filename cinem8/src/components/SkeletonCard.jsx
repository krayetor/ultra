const SkeletonCard = () => {
    
    return (
        <div className="bg-white dark:bg-slate-800 rounded-[20px] shadow-xl overflow-hidden animate-pulse" style={{  width: '294px', height: '339px' }}>
            {/* poster placeholder */}
            <div className="w-full h-[210px] bg-gray-200 dark:bgslate-700" />

            {/* content lines */}
            <div className="px-4 space-y-3">
                {/* title + star */}
                <div className="flex justify-between items-start">
                    <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded w-3/4" />
                    <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded-full" />
                </div>
                
                {/* date */}
                <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/2 mt-4" />

                {/* ratings */}
                <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/3" />
            </div>
        </div>
    );
};

export default SkeletonCard;