  import React, { useContext, useState } from 'react';
  import './Cart.css';
  import { StoreContext } from '../../context/StoreContext';
  import { useNavigate } from 'react-router-dom';
  import { FaTrashAlt } from 'react-icons/fa'; 
  import { BsCartXFill } from 'react-icons/bs';
  import { ToastContainer, toast } from 'react-toastify'; 
  import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

  const Cart = () => {
    const { cartItems, foodList, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState('');
    const [deliveryFee, setDeliveryFee] = useState(40);

    const handleInputChange = (e) => {
      setUserInput(e.target.value);
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (userInput.trim() !== '') {
        const userData = {
          input: userInput,
          timestamp: new Date().toISOString(),
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        toast.success('User input saved to local storage!');
        console.log('Saved to local storage:', userData); // Debugging output
      } else {
        toast.error('Please enter some input');
      }
    };

    const handleApplyPromoCode = () => {
      if (userInput.trim() === 'INFIIIII') {
        setDeliveryFee(30);
        toast.success('Promo code applied! Delivery fee reduced by ₹10');
      } else {
        toast.error('Invalid promo code');
      }
    };

    const handleProceedToCheckout = () => {
      const cartData = foodList
        .filter((item) => cartItems[item.foodId] > 0)
        .map((item) => ({
          foodId: item.foodId,
          foodName: item.foodName,
          foodPrice: item.foodPrice,
          quantity: cartItems[item.foodId],
          totalPrice: item.foodPrice * cartItems[item.foodId],
        }));

      localStorage.setItem('cartData', JSON.stringify(cartData));
      console.log('Cart data saved to local storage:', cartData); 
      navigate('/user-dashboard/order');
    };

    return (
      <div className='cart'>
        {getTotalCartAmount() === 0 ? (
          <div className="empty-cart">
            <BsCartXFill className="empty-cart-icon" />
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              <div className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
              </div>
              <br />
              <hr />
              {foodList.map((item, index) => {
                if (cartItems[item.foodId] > 0) {
                  return (
                    <div key={index}>
                      <div className="cart-items-title cart-items-item">
                        <img src={item.foodImage} alt='' />
                        <p>{item.foodName}</p>
                        <p>{item.foodPrice}</p>
                        <p>{cartItems[item.foodId]}</p>
                        <p>{item.foodPrice * cartItems[item.foodId]}</p>
                        <p onClick={() => removeFromCart(item.foodId)} className='cross'>
                          <FaTrashAlt />
                        </p>
                      </div>
                      <hr />
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div className="cart-bottom">
              <div className="cart-total">
                <h2>Cart Total</h2>
                <div>
                  <div className="cart-total-details">
                    <p>SubTotal</p>
                    <p>₹{getTotalCartAmount()}</p>
                  </div>
                  <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>₹{deliveryFee}</p>
                  </div>
                  <div className="cart-total-details">
                    <b>Grand Total</b>
                    <b>₹{getTotalCartAmount() + deliveryFee}</b>
                  </div>
                </div>
                <button onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>
              </div>
              <div className="cart-user-input">
                <div>
                  <p>PromoCode:</p>
                  <form onSubmit={handleFormSubmit}>
                  </form>
                  <div className="cart-user-input-field">
                    <input 
                      type="text" 
                      placeholder='Enter promo code' 
                      value={userInput} 
                      onChange={handleInputChange} 
                    />
                    <button type="button" onClick={handleApplyPromoCode}>Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <ToastContainer /> 
      </div>
    );
  };

  export default Cart;
