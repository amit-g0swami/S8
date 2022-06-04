import React from "react";

const Loader = ({height}) => {
  return (
    <div
      style={{height: height}}
      class="flex items-center w-full justify-center ">
      <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  );
};
export default Loader;
