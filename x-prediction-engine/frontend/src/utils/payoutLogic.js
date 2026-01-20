export const getPayoutDates = () => {
  const now = new Date();
  
  // Reference Saturday (X payouts usually happen every 2 weeks)
  // Let's use Jan 10, 2026 as a known payout Saturday reference
  const referenceDate = new Date("2026-01-10");
  
  const msInDay = 24 * 60 * 60 * 1000;
  const daysSinceRef = Math.floor((now - referenceDate) / msInDay);
  const fortnightsSinceRef = Math.floor(daysSinceRef / 14);
  
  const lastPayout = new Date(referenceDate.getTime() + fortnightsSinceRef * 14 * msInDay);
  const nextPayout = new Date(lastPayout.getTime() + 14 * msInDay);

  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  
  return {
    last: lastPayout.toLocaleDateString('en-US', options),
    next: nextPayout.toLocaleDateString('en-US', options)
  };
};