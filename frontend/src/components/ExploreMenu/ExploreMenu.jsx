import React, { useState } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
import FoodDisplay from '../FoodDisplay/FoodDisplay'; // Import FoodDisplay component

const ExploreMenu = () => {
  const [category, setCategory] = useState('All');

  return (
    <div className='explore-menu-page'>
      <header className='explore-menu-header'>
        <h1>Explore Menu</h1>
        <p className='explore-menu-text'>
          Explore a diverse menu brimming with a delectable array of dishes, crafted by local home chefs. Our mission is to not only satisfy your cravings but also to elevate your dining experience by bringing the warmth and flavor of home-cooked meals to your table, one delicious meal at a time.
        </p>
      </header>
      <br />
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}
            key={index}
            className={`explore-menu-list-item ${category === item.menu_name ? 'active' : ''}`}
          >
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <FoodDisplay category={category} /> 
      <footer>
        <hr />
      </footer>
    </div>
  );
}

export default ExploreMenu;
