import React from "react";

const Nondev = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8 text-white">

      <div>
        <div className="font-semibold mb-3">Tools and Utilities</div>
        <div className="flex flex-wrap items-center gap-2 justify-between">
          <div className="flex-1 min-w-[60px] h-20 border border-white rounded-md flex items-center justify-center"> <img src="/figma.svg" className="max-w-[50px]" alt="" /></div>
          <div className="flex-1 min-w-[60px] h-20 border border-white rounded-md flex items-center justify-center"> <img src="/postman.svg" className="max-w-[50px]" alt="" /></div>
          <div className="flex-1 min-w-[60px] h-20 border border-white rounded-md flex items-center justify-center"> <img src="/linuxlogo.svg" className="max-w-[50px]" alt="" /></div>
          <div className="flex-1 min-w-[60px] h-20 border border-white rounded-md flex items-center justify-center"> <img src="/mongoatlas.png" className="max-w-[50px]" alt="" /></div>
        </div>
        <hr className="my-6 border-gray-400" />
      </div>


      <div>
        <div className="font-semibold mb-3">Data Structures</div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex-1 min-w-[60px] h-20 border border-white rounded-md flex items-center justify-center">
            <img src="/clogo.svg" alt="" />
          </div>
          
          <div className="flex-1 min-w-[60px] h-20 border border-white rounded-md flex items-center justify-center">
            <img src="/cpplogo.svg" alt="" />
          </div>
          
          <div className="flex-1 min-w-[60px] h-20 border border-white rounded-md flex items-center justify-center">
            <img src="/pythonlogo.svg" alt="" />
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
      </div>

      <div>
        <div className="font-semibold mb-3">Version Control</div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex-1 min-w-[60px] h-20 border border-white rounded-md flex items-center justify-center"> <img src="/githubnew.svg" className="max-w-[50px]" alt="" /></div>
          <div className="flex-1 min-w-[60px] h-20 border border-white rounded-md flex items-center justify-center"> <img src="/git.svg" className="max-w-[50px]" alt="" /></div>        
        </div>
      </div>
    </div>
  );
};

export default Nondev;
