import { useState } from "react";
import CheckboxIcon from "./CheckboxIcon"; // reuse the real component

function CheckboxRow({ label }) {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className="
        flex items-center justify-between w-full h-12 px-4  
        border border-gray-200 transition
        bg-white
      "
    >
      <span className="text-gray-800 font-medium">{label}</span>

      <CheckboxIcon
        initialChecked={checked}
        onChange={setChecked}
      />
    </div>
  );
}

export default CheckboxRow;
