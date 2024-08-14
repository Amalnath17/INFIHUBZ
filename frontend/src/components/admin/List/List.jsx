import React, { useEffect, useState } from 'react';
import './List.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import toastify CSS

const List = () => {
  const [list, setList] = useState([]);

  // Fetch the list of items
  const fetchList = async () => {
    try {
      const response = await fetch('http://localhost:8088/admin/list');
      const data = await response.json();

      if (response.ok) {
        setList(data);
      } else {
        toast.error('Error fetching list');
      }
    } catch (error) {
      toast.error('Error fetching list');
    }
  };

  // Delete an item from the list
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:8088/admin/delete/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setList(list.filter(item => item.foodId !== id));
        toast.success('Item deleted successfully');
      } else {
        toast.error('Error deleting item');
      }
    } catch (error) {
      toast.error('Error deleting item');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list-container'>
      <div className='list'>
        <p>All Foods List</p>
        <div className='list-table'>
          <div className='list-table-format title'>
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item, index) => (
            <div key={index} className='list-table-format'>
              <img src={item.foodImage} alt={item.foodName} />
              <p>{item.foodName}</p>
              <p>{item.foodCategory}</p>
              <p>${item.foodPrice}</p>
              <p className='cursor' onClick={() => deleteItem(item.foodId)}>X</p>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer /> {/* ToastContainer component to display toast notifications */}
    </div>
  );
};

export default List;
