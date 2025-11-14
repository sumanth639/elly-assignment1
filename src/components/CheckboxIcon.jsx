// CheckboxIcon.jsx
import React, { useState, useRef } from "react";
import { CHECKBOX_VARIANTS } from "../assets/checkboxVariants";


 
export default function CheckboxIcon({
  initialChecked = false,
  onChange = null,
}) {
  const OFF_VARIANT = "Default";
  const ON_VARIANT = "Variant5"; 
  const [isChecked, setIsChecked] = useState(Boolean(initialChecked));

  const [interaction, setInteraction] = useState("idle");
  const ref = useRef(null);

  
  const getCurrentVariant = () => {
    if (!isChecked) {
      
      if (interaction === "press") return "Variant9";
      if (interaction === "hover") return "Variant2";
      return OFF_VARIANT;
    } else {
     
      if (interaction === "press") return "Variant7";
      return ON_VARIANT;
    }
  };

  const variant = getCurrentVariant();
  const v = CHECKBOX_VARIANTS[variant] ?? CHECKBOX_VARIANTS.Default;

 
  const toggleChecked = () => {
    setIsChecked((prev) => {
      const next = !prev;
      if (onChange) onChange(next);
      return next;
    });
  };

 
  const onKeyDown = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggleChecked();
    }
  };

  return (
    <button
      ref={ref}
      type="button"
      role="checkbox"
      aria-checked={isChecked}
      tabIndex={0}
      onClick={() => {
        
        toggleChecked();
        
        setInteraction("idle");
      }}
      onMouseEnter={() => setInteraction((s) => (s === "press" ? s : "hover"))}
      onMouseLeave={() => setInteraction("idle")}
      onMouseDown={() => setInteraction("press")}
      onMouseUp={() => setInteraction((s) => (s === "press" ? "hover" : s))}
      onKeyDown={onKeyDown}
      className={`
        relative w-[25px] h-[25px] rounded-md overflow-hidden
        flex items-center justify-center transition-all duration-75
        ${v.base} ${v.before ?? ""}
      `}
     
      aria-label={isChecked ? "Checked" : "Not checked"}
    >
     
      <svg
        className={`w-[22px] h-[22px] transition-all duration-75 ${v.icon}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    </button>
  );
}
