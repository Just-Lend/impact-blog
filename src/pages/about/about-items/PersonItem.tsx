import React from "react";

interface Props {
  imageSource: string;
  name: string;
  position: string;
}

const PersonItem: React.FC<Props> = ({ imageSource, name, position }) => {
  return (
    <div className="flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
      <img
        src={imageSource}
        alt={name}
        className=" w-28 h-28 rounded-full object-cover border-4 border-transparent hover:border-[#6b4ed1] transition-all duration-300"
      />
      <p className="font-semibold text-lg mt-2 text-gray-900">{name}</p>
      <p className="text-sm text-[#6b4ed1] font-medium">{position}</p>
    </div>
  );
};

export default PersonItem;
