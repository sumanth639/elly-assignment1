import CheckboxIcon from "../components/CheckboxIcon";
import CheckboxRow from "../components/CheckboxRow";

export default function FullCheckboxComponent() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center ">

      <div className="flex gap-8 p-8 bg-white rounded-xl ">

      
        <div className="flex flex-col gap-4">
          {Array(9)
            .fill(0)
            .map((_, i) => (
              <CheckboxIcon key={i} />
            ))}
        </div>

       
        <div className="flex flex-col gap-4 w-[370px]">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <CheckboxRow key={i} label="All pages" />
            ))}
        </div>
      </div>
    </div>
  );
}
