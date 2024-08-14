import React, { useState } from 'react';
import './Add.css';
import { RiFileAddLine } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        foodName: "",
        foodDescription: "",
        foodPrice: "",
        foodCategory: "Dosa"
    });

    // Handle input changes
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(data => ({ ...data, [name]: value }));
    };

    // Convert image file to Base64
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    // Handle form submission
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        
        let base64Image = null;
        if (image) {
            base64Image = await convertToBase64(image);
        }

        const jsonData = {
            foodName: data.foodName,
            foodDescription: data.foodDescription,
            foodPrice: data.foodPrice,
            foodCategory: data.foodCategory,
            foodImage: base64Image
        };

        try {
            const response = await fetch('http://localhost:8088/admin/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            });

            if (response.ok) {
                // Reset form fields
                setData({
                    foodName: "",
                    foodDescription: "",
                    foodPrice: "",
                    foodCategory: "Dosa"
                });
                setImage(null);
                toast.success("Successfully added the product!");
            } else {
                toast.error("Error adding the product: " + response.statusText);
            }
        } catch (error) {
            toast.error("Failed to add product. Please try again.", error);
        }
    };

    return (
        <div className='add-container'>
            <ToastContainer />
            <div className='add'>
                <form className='flex-col' onSubmit={onSubmitHandler}>
                    <div className="add-img-upload flex-col">
                        <h3>Upload Image</h3>
                        <div className='food-add-icon'>
                            <label htmlFor="image">
                                <RiFileAddLine />
                            </label>
                        </div>
                        <input 
                            onChange={(e) => setImage(e.target.files[0])} 
                            type="file" 
                            id="image" 
                            hidden 
                            required 
                        />
                    </div>
                    <div className="add-product-name flex-col">
                        <h3>Product name</h3>
                        <input 
                            onChange={onChangeHandler} 
                            value={data.foodName} 
                            type="text" 
                            name='foodName' 
                            placeholder='Type here' 
                            required 
                        />
                    </div>
                    <div className="add-product-description flex-col">
                        <h3>Product Description</h3>
                        <textarea 
                            onChange={onChangeHandler} 
                            value={data.foodDescription} 
                            name="foodDescription" 
                            rows="6" 
                            placeholder='Write content here' 
                            required
                        ></textarea>
                    </div>
                    <div className="add-category-price">
                        <div className="add-category flex-col">
                            <h3>Product Category</h3>
                            <select 
                                className='selectt' 
                                onChange={onChangeHandler} 
                                name="foodCategory" 
                                value={data.foodCategory} 
                                required
                            >
                                <option value="Dosa">Dosa</option>
                                <option value="Idli">Idli</option>
                                <option value="Chapati">Chapati</option>
                                <option value="Biriyani">Biriyani</option>
                                <option value="Variety Rice">Variety Rice</option>
                                <option value="Fried Rice">Fried Rice</option>
                                <option value="Full Meals">Full Meals</option>
                                <option value="Snacks">Snacks</option>
                            </select>
                        </div>
                        <div className="add-price flex-col">
                            <h3>Product Price</h3>
                            <input 
                                className='inputclasa' 
                                onChange={onChangeHandler} 
                                value={data.foodPrice} 
                                type="number" 
                                name='foodPrice' 
                                placeholder='₹50' 
                                required 
                            />
                        </div>
                    </div>
                    <button type='submit' className='add-btn'>ADD</button>
                </form>
            </div>
        </div>
    );
}

export default Add;
