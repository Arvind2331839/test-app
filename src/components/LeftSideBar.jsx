import React from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggleCard, toggleList } from "../feature/slice/viewSlice";

const LiftSideBar = () => {
  const dispatch = useDispatch();
  const currentView = useSelector((state) => state.view.mode);

  return (
    <div className="w-full sm:w-64 md:w-72 lg:w-80 p-4 space-y-5">

 {/* Profile Card */}
      <div className="flex items-center bg-white shadow-md hover:shadow-xl transition rounded-xl p-4">
        <img
          className="h-14 w-14 rounded-full object-cover"
          src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Profile"
        />
        <div className="ml-4">
          <h3 className="font-semibold text-gray-900 text-lg">Hi Rider 👋</h3>
          <p className="text-gray-600 text-sm">Here’s your News</p>
        </div>
      </div>

      {/* View Toggle Section */}
      <div className="bg-white shadow-md rounded-xl p-4">
        <h3 className="font-bold text-xl mb-3">View Toggle</h3>

        <div className="flex gap-3">

          {/* Card View Button */}
          <button
            className={`p-4 rounded-xl transition ${
              currentView === "card" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => dispatch(toggleCard())}
          >
            <FaRegAddressCard size={30} />
          </button>

          {/* List View Button */}
          <button
            className={`p-4 rounded-xl transition ${
              currentView === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => dispatch(toggleList())}
          >
            <GiHamburgerMenu size={30} />
          </button>
        </div>
      </div>
       {/* Feedback Section */}
      <div className="bg-white shadow-md hover:shadow-xl transition rounded-xl p-4">
        <h3 className="font-bold text-lg text-gray-900">Have Feedback?</h3>
        
        <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 transition text-white font-medium py-3 rounded-xl shadow-sm">
          We're Listening 💬
        </button>
      </div>
    </div>
  );
};

export default LiftSideBar;
