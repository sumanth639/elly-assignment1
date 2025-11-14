import PageRow from "../components/PageRow";
import CheckboxIcon from "../components/CheckboxIcon";
import ButtonComponent from "../components/ButtonComponent";

export default function PageSelector() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">


      <div
        className="
          bg-white border border-[#eeeeee] rounded-md
          w-96 overflow-hidden shadow-2xl p-5 "
      >
       
        <div
          className="
            h-[42px] bg-white 
            flex items-center justify-between 
          "
        >
          <p className="text-[14px] text-[#1f2128]">All pages</p>
          <CheckboxIcon />
        </div>

       
        <div className="py-2.5"> 
          <div className="border-t border-[#dddddd] w-full" />
        </div>


        <div className="flex flex-col">
          <PageRow label="Page 1" />
          <PageRow label="Page 2" />
          <PageRow label="Page 3" />
          <PageRow label="Page 4" />
    
        </div>

       
        <div className="py-[18px]">
          <div className="border-t border-[#dddddd] w-full" />
        </div>

    
        <div className=" flex">
          <ButtonComponent bgColor="bg-[#ffce22]" text="Done" />
        </div>
      </div>
    </div>
  );
}