import { useState } from "react";

const ImageWithFallback = ({ src, alt, className }) => {
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    // cinematic placeholder
    const placeholder = "https://placehold.co/500x750/1e293b/FFF?text=No+Poster";

    return (
        <div className={`relative overflow-hidden ${className} bg-slate-800`}>
            {/* shimmer effect while loading actual image */}
            {!loaded && !error && (
                <div className="absolute inset-0 animate-pulse bg-slate-700 z-10" />
            )}

            <img
                src={error ? placeholder : src}
                alt={alt}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                    loaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
            />
        </div>
    );
};

export default ImageWithFallback;