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
    </div>
  );
};

export default LiftSideBar;
