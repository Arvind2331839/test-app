import React, { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";
import { fetchUser } from "../feature/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import CardList from "./ListComponent";
import ListComponent from "./ListComponent";
import CardComponent from "./CardComponent";
import { useNavigate } from "react-router-dom";

const RightSideBar = () => {
   const viewType = useSelector((state) => state.view.mode);

  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]); // Local state for dynamic UI
  const itemsPerPage = 4;

 const navigate = useNavigate()
  const dispatch = useDispatch();
  const { data = [], loading, error } = useSelector((state) => state.user);

  // Sync fetched data to local editable array
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  // Update local items when API responds
  useEffect(() => {
    if (data.length > 0) setItems(data);
  }, [data]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  // 🚀 Delete + Auto Shift Logic
  const deleteCard = (id) => {
    setItems((prevItems) => {
      const updated = [...prevItems];
      const removeIndex = updated.findIndex((item) => item.id === id);
      
      // Remove selected item
      updated.splice(removeIndex, 1);

      return updated;
    });

    // Auto adjust pagination so blank page never appears
    setTimeout(() => {
      const newTotalPages = Math.ceil((items.length - 1) / itemsPerPage);
      if (currentPage > newTotalPages && newTotalPages > 0) {
        setCurrentPage(newTotalPages);
      }
    }, 100);
  };

  return (
    <div className="p-4">
      {loading && <h3>Loading...</h3>}
      {error && <h3>Error: {error}</h3>}

       <div className="p-5">
      {viewType === "card" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentItems.map((item) => (
            <CardComponent key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className="space-y-3"  >
          {currentItems.map((item) => (
           <div onClick={() => navigate(`/post/${item.id}`)}> 
            <ListComponent key={item.id} {...item} onDelete={deleteCard} />

           </div>
          ))}
        </div>
      )}
    </div>

      {/* Pagination */}
      <div className="mt-3">
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default RightSideBar;
