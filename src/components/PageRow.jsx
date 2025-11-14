import { useState } from "react";
import CheckboxIcon from "./CheckboxIcon";

export default function PageRow({ label }) {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className="
        bg-white flex items-center justify-between 
        h-[42px] 
      "
    >
      <span className="text-[14px] text-[#1f2128] font-normal">
        {label}
      </span>

      <CheckboxIcon
        initialChecked={checked}
        onChange={setChecked}
      />
    </div>
  );
}
