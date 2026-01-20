import React from "react";
import { CheckCircle2 } from "lucide-react"; //  elegant, thin icons
import VerifiedBadge from "./VerifiedBadge";

const ProfileCard = ({ userData, darkMode }) => {
    if (!userData) return null;

    return (
        <div className={`w-full rounded-[24px] p-6 mb-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 border ${
            darkMode
                ? 'bg-white/[0.02] border-white/10'
                : 'bg-black/[0.02] border-black/5'
        }`}>
            <div className="flex items-center gap-4">
                {/* user avatar with ring */}
                <div className={`relative w-16 h-16 rounded-full p-1 border ${
                    darkMode ? 'border-zinc-800' : 'border-zinc-200'
                }`}>
                    <img
                        src={userData.profile_image_url || 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover grayscale-[0.4]"
                    />
                    {userData.is_blue_verified && (
                        <div className="absolute -right-1 -bottom-1">
                            <VerifiedBadge className="w-5 h-5" />
                        </div>
                    )}
                </div>

                {/* user info */}
                <div className="flex flex-col">
                    <h2 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-white' : 'text-black'}`}>
                        {userData.name}
                    </h2>
                    <p className="text-sky-500 text-xs font-medium tracking-wide">
                        @{userData.username}
                    </p>
                </div>
            </div>

            {/* metrics grid */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-dashed border-zinc-800/20">
                <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-black">Followers</span>
                    <span className={`text-xl font-light tracking-tighter ${darkMode ? 'text-white' : 'text-black'}`}>
                        {userData.followers_count?.toLocaleString()}
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-black">Status</span>
                    <span className={`text-[11px] mt-1 font-bold uppercase tracking-widest ${
                        userData.is_blue_verified ? 'text-sky-500' : 'text-zinc-500'
                    }`}>
                        {userData.is_blue_verified ? 'Monetized' : 'Unverified'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;