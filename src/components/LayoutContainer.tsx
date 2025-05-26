import React from "react";
interface Props {
  children: React.ReactNode;
}

const LayoutContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto  w-[90vw] tablet:w-[90vw] mobile:w-[95vw] py-4 flex-1">
      {children}
    </div>
  );
};

export default LayoutContainer;
