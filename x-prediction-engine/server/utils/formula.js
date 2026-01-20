const calculateXpayout = (followers, isVerified) => {
    if (!isVerified) return "0.00";

    // Tiered engagement logic
    let reachMultiplier = 0.05; 
    if (followers > 50000) reachMultiplier = 0.07;
    if (followers > 500000) reachMultiplier = 0.10;

    // Estimate monthly impressions (Followers * multiplier * 30 days)
    const monthlyImpressions = followers * reachMultiplier * 30;
    
    // Average CPM for ad-revenue sharing (~$0.007 per 1k impressions)
    const estimatedPayout = (monthlyImpressions / 1000) * 0.007;

    return estimatedPayout.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};

module.exports = { calculateXpayout };