import './singleproduct.css'
import React, { useState, useEffect } from 'react'
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons'

const SingleProduct = ({ item }) => {
  return (
    <div className='p-container'>
        <div className='p-description'>
          <h3 className='p-title'>{item.title}</h3>
          <p className='p-text'>{item.description}</p>
        </div>
        <img src={item.img} className='p-image'></img>
        <div className="p-info">
          <div className="p-icon">
            <ShoppingCartOutlined/>
          </div>
          <div className="p-icon">
            <FavoriteBorderOutlined/>
          </div>
          <div className="p-icon">
            <SearchOutlined/>
          </div>
        </div>
      </div>
      )
}

      export default SingleProduct