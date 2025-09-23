import React from 'react';

const ImpactMetric = ({ value, label, className = "impact_item" }) => {
  return (
    <div className={className}>
      <div className={className === "impact_item" ? "impact_value" : "uptime_value"}>{value}</div>
      <div className={className === "impact_item" ? "impact_label" : "uptime_label"}>{label}</div>
    </div>
  );
};

export default React.memo(ImpactMetric);