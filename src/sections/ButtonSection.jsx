import ButtonComponent from "../components/ButtonComponent";

const ButtonSection = () => {
  const buttonConfigs = [
    { id: 1, text: "Done", colorClass: "bg-[#FFCE22]" }, 
    { id: 2, text: "Done", colorClass: "bg-[#FFD84D]" }, 
    { id: 3, text: "Done", colorClass: "bg-[#FFCE22]" }, 
  ];

  return (
   
    <div className="  flex items-center justify-center p-4">
      <div className="flex flex-col space-y-5 w-full items-center">
        {buttonConfigs.map(config => (
          <ButtonComponent
            key={config.id}
            text={config.text}
            bgColor={config.colorClass} 
          />
        ))}
        
      </div>
    </div>
  );
};

export default ButtonSection;