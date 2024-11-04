import React from 'react'
import './ExploreMenu'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes with the finest ingredients and culinary expertise.Our mission is to satisfy  your cravings and elevent your dining experience, our delicious meal at a time</p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
           return (
             <div key={index} className='explore-menu-list-item'>
               <image src={item.menu_image} alt=""/>
               <p>{item.menu_name}</p>

             </div>
          );
        })}

      </div>
      </div>
  )
}

export default ExploreMenu