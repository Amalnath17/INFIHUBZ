import React, { useEffect, useState } from 'react';
import './Orders.css';
import { toast } from "react-toastify";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await fetch('http://localhost:8088/chiefs/food');
      if (response.ok) {
        let data = await response.json();
        console.log(" looooo   :",data);

        // Combine orders with the same userId and foodId
        const mergedOrders = data.reduce((acc, order) => {
          const existingOrder = acc.find(item => item.userId === order.users.userId && item.foodId === order.food.foodId);
          if (existingOrder) {
            existingOrder.quantity += order.quantity; // Increase the quantity
            existingOrder.amount += order.food.foodPrice * order.quantity; // Increase the amount
          } else {
            order.amount = order.food.foodPrice * order.quantity; // Calculate the initial amount
            order.userId = order.users.userId; // Add userId for easier comparison
            order.foodId = order.food.foodId; // Add foodId for easier comparison
            acc.push(order);
          }
          return acc;
        }, []);

        setOrders(mergedOrders);
        console.log(mergedOrders);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("Error fetching orders: " + error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    const updatedOrders = orders.map(order => 
      order.orderId === orderId ? { ...order, status: event.target.value } : order
    );
    setOrders(updatedOrders);

    
    try {

      const response = {
        success: true,
        message: "Order status updated successfully"
      };

      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error("Error updating status");
      }
    } catch (error) {
      toast.error("Error updating status: " + error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={order.food.foodImage} alt={order.food.foodName} />
            <div>
              <p className='order-item-food'>
                {order.food.foodName + " x " + order.quantity}
              </p>
              <p className='order-item-name'>
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{order.address.street + ","}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipCode}</p>
              </div>
              <p className="order-item-phone">{order.address.phoneNumber}</p>
            </div>
            <p>Items : {order.quantity}</p>
            <p>${order.amount}</p>
            <select onChange={(event) => statusHandler(event, order.orderId)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders;
