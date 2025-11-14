import React from "react";

function CheckboxIconWrapper({ checked, setChecked }) {
  return (
    <button
      onClick={() => setChecked(!checked)}
      className={`
        w-6 h-6 rounded-md border 
        flex items-center justify-center transition
        ${checked ? "bg-blue-600 border-blue-600" : "bg-white border-gray-400"}
      `}
    >
      {checked && (
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      )}
    </button>
  );

}

export default CheckboxIconWrapper