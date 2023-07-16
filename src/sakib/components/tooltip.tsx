import React, { ReactNode } from 'react';

interface TooltipProps {
  text: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="tooltip">
      <span className="tooltiptext">{text}</span>
      {children}
    </div>
  );
};

export default Tooltip;
