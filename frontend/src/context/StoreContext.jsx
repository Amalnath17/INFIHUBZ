import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [foodList, setFoodList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [discount, setDiscount] = useState(0);
    const [deliveryFee, setDeliveryFee] = useState(40); // Default delivery fee set to ₹40

    useEffect(() => {
        // Fetch the data from the backend
        axios.get('http://localhost:8088/admin/list')
            .then(response => {
                console.log("Fetched foodList: ", response.data); // Debug log
                setFoodList(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the food list!", error);
            });
    }, []);

    const applyPromoCode = (code) => {
        if (code === 'INFIIIII') {
            setDiscount(10); // ₹15 discount for promo code
            setDeliveryFee(deliveryFee - 10); // Reduce delivery fee by ₹15
        } else {
            setDiscount(0);
            setDeliveryFee(40); // Reset to default delivery fee
        }
    };

    const addToCart = (itemId) => {
        console.log(`Adding item to cart: ${itemId}`); 
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            if (!newCartItems[itemId]) {
                newCartItems[itemId] = 1;
            } else {
                newCartItems[itemId] += 1;
            }
            console.log(`Updated cart items: ${JSON.stringify(newCartItems)}`); // Debug log
            return newCartItems;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            if (newCartItems[itemId] > 0) {
                newCartItems[itemId] -= 1;
            }
            if (newCartItems[itemId] === 0) {
                delete newCartItems[itemId];
            }
            console.log(`Updated cart items: ${JSON.stringify(newCartItems)}`); // Debug log
            return newCartItems;
        });
    };

    const getTotalCartAmount = () => {
        console.log("Cart items: ", cartItems); 
        console.log("Food list: ", foodList);

        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const itemInfo = foodList.find((product) => product.foodId === parseInt(itemId)); // Convert to number if necessary
                if (itemInfo) {
                    console.log(`Item info: `, itemInfo); // Debug log
                    totalAmount += itemInfo.foodPrice * cartItems[itemId];
                } else {
                    console.warn(`Item not found in foodList: ${itemId}`); // Debug log
                }
            }
        }
        console.log(`Total cart amount: ₹${totalAmount}`); 
        return totalAmount;
    };

    const getFinalCartAmount = () => {
        return getTotalCartAmount() + deliveryFee - discount;
    };

    const contextValue = {
        foodList,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        applyPromoCode,
        discount,
        getFinalCartAmount,
        deliveryFee
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
