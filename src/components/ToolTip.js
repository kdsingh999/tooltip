import React from 'react';
import './ToolTIp.css';
const ToolTip = ({ lable, title, position, ...rest }) => {
  return (
    <div className="tooltip-main" {...rest}>
      {title}
      <div className={`tooltip tooltip-${position}`}>{lable}</div>
    </div>
  );
};

export default ToolTip;
