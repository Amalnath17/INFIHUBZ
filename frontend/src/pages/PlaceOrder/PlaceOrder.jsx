import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
    const { getTotalCartAmount, discount, deliveryFee } = useContext(StoreContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleToDatabase = () => {
        const address = JSON.parse(localStorage.getItem('address'));
        const cartData = JSON.parse(localStorage.getItem('cartData'));
        const users = JSON.parse(localStorage.getItem('users'));

        const addressId = address?.addressId;
        const userId = users?.userId;

        const dataToSend = cartData.map(item => ({
            addressId: addressId,
            userId: userId,
            foodId: item.foodId,
            quantity: item.quantity
        }));

        console.log(dataToSend);

        fetch('http://localhost:8088/admin/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = {
            firstName,
            lastName,
            email,
            street,
            city,
            state,
            zipCode,
            country,
            phoneNumber
        };

        try {
            const response = await fetch('http://localhost:8088/address/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            });

            if (response.ok) {
                const address = await response.json();
                localStorage.setItem("address", JSON.stringify(address));
                console.log('Order placed successfully:', address);
            } else {
                console.error('Error placing order');
            }
        } catch (error) {
            console.error('Error placing order', error);
        }
    };

    return (
        <form className="place-order" onSubmit={handleSubmit}>
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-field">
                    <input 
                        type="text" 
                        placeholder='First name *' 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder='Last name *' 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        required 
                    />
                </div>
                <input 
                    type="email" 
                    placeholder='Email address *' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder='Street *' 
                    value={street} 
                    onChange={(e) => setStreet(e.target.value)} 
                    required 
                />
                <div className="multi-field">
                    <input 
                        type="text" 
                        placeholder='City *' 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder='State *' 
                        value={state} 
                        onChange={(e) => setState(e.target.value)} 
                        required 
                    />
                </div>
                <div className="multi-field">
                    <input 
                        type="text" 
                        placeholder='Zip code *' 
                        value={zipCode} 
                        onChange={(e) => setZipCode(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder='Country *' 
                        value={country} 
                        onChange={(e) => setCountry(e.target.value)} 
                        required 
                    />
                </div>
                <input 
                    type="text" 
                    placeholder='Phone no. *' 
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                    required 
                />

                <button type="submit">CONFIRM</button>
                <br/>
                <br/>

            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${deliveryFee}</p>
                        </div>
                        <div className="cart-total-details">
                            <b>Grand Total</b>
                            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryFee}</b>
                        </div>
                    </div>
                    <button type="button" onClick={handleToDatabase}>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
