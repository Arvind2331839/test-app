import React from "react";

const CardComponent = ({ title, body, id, onDelete, onOpen }) => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-[2px] rounded-2xl shadow-xl hover:scale-[1.03] transition duration-300">
        
        <div className="bg-white rounded-2xl p-3 flex flex-col items-center">
          
         
          <img
            className="w-32 h-32 rounded-xl object-cover shadow-md"
            src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80"
            alt="card-img"
          />

          
          <h3 className="font-bold text-lg mt-3 text-gray-900 text-center">
            Streamlining your design workflow
          </h3>

          <p className="text-gray-600 text-sm text-center mt-1">
            Improve collaboration between developers, designers, and product teams.
          </p>

          <button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 text-sm rounded-full shadow-md hover:shadow-xl hover:scale-105 transition">
            Read More 📄
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
