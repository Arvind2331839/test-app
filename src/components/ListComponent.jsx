import React from "react";
import { RxCross1 } from "react-icons/rx";

const ListComponent = ({ title, body, id, onDelete, onOpen }) => {
  return (
    <div className="flex justify-center items-center cursor-pointer" onClick={onOpen}>
      <div className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 m-2 w-full max-w-xl hover:scale-105 transition">
        
        <div className="flex items-center gap-4">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80"
            alt=""
          />
          <div>
            <p>ID-{id}</p>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-gray-500">{body.slice(0, 25)}...</p>
          </div>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
        className="bg-gray-200 hover:bg-red-300 p-2 rounded-full ml-3 text-red-500"
      >
        <RxCross1 size={20} />
      </button>
    </div>
  );
};

export default ListComponent;
