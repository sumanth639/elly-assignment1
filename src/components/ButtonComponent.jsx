import React, { useState } from "react";

export default function ButtonComponent({ text = "Done" }) {
  const [state, setState] = useState("default");

  const getColor = () => {
    if (state === "hover") return "bg-[#FFD84D]";     
    if (state === "active") return "bg-[#FFCE22]";    
    return "bg-[#FFCE22]";                            
  };

  return (
    <button
      className={`
        ${getColor()}
        w-[340px] h-10 rounded-sm
        flex items-center justify-center
        font-normal text-[14px] text-[#1F2128]
        px-5 py-2.5
        transition-colors duration-75
      `}
      onMouseEnter={() => setState("hover")}
      onMouseLeave={() => setState("default")}
      onMouseDown={() => setState("active")}
      onMouseUp={() => setState("hover")}
    >
      {text}
    </button>
  );
}
