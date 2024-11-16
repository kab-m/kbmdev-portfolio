import React from "react";

const RoundedContainer = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-[75vh] md:h-[60vh] w-[90%] md:w-[70%] max-w-[1000px] p-6 bg-white dark:bg-black/70 rounded-tr-[50px] rounded-bl-[50px] border-t border-b border-red-400 dark:border-red-700">
      {children}
    </div>
  );
};

export default RoundedContainer;
