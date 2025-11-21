import React from "react";
import RightSideBar from "../components/RightSideBar";
import LiftSideBar from "../components/LeftSideBar";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-200">
      <div className="w-[90%] max-w-6xl bg-sky-100 rounded-3xl p-5 flex flex-col md:flex-row gap-5 justify-center items-center shadow-xl">

        
        <div className="w-full md:w-1/3">
          <LiftSideBar />
        </div>

        
        <div className="w-full md:w-2/3">
          <RightSideBar />
        </div>

      </div>
    </div>
  );
};

export default HomePage;
