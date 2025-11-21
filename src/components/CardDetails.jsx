import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../feature/slice/userSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const CardDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleUser, loading } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [id, dispatch]);

  if (loading) return <p>Loading...</p>;

return (
  <div className="min-h-screen flex justify-center items-center  from-gray-100 via-white to-gray-200 p-6">

    <div className="max-w-3xl w-full bg-blue-300 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-gray-200 transition hover:shadow-[0_0_50px_rgba(0,0,0,0.15)]">

    
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
          📝 Post Details
        </h2>
        <span className="text-sm font-medium px-4 py-2 rounded-full bg-blue-100 text-blue-600">
          ID: {singleUser?.id}
        </span>
      </div>

     
      <h1 className="text-2xl font-semibold text-gray-900 mb-4 leading-snug">
        {singleUser?.title}
      </h1>

      
      <div className="w-full  bg-gray-300 mb-6"></div>

      
      <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
        {singleUser?.body}
      </p>

      
      <div className="flex justify-end gap-4 mt-10">
        <button 
          onClick={() => navigate(-1)} 
          className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-xl font-medium transition"
        >
          ⬅ Back
        </button>

        <button 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition shadow-md"
        >
          ✏ Edit
        </button>
      </div>
    </div>
  </div>
);

};


export default CardDetails;
