import React from 'react';

const alerts = [
  "Severe thunderstorm warning in your area.",
  "Heat advisory: high temperatures expected today.",
  "Flood watch for the following counties...",
  "Prepare for winter storm conditions this weekend.",
  "High wind warning has been issued for the region.",
];

const Ticker = () => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap" style={{ maxWidth: "400px", overflow: 'hidden' }}>
      <div className="animate-marquee flex justify-start items-center">
        {alerts.map((alert, index) => (
          <div key={index} className="mr-8">
            {alert}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;