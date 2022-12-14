import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ADD_TO_CART } from '../../../redux/slice/cartSlice'
import './ProductItem.css'

const ProductItem = ({product, id, title, price, image}) => {

  const dispatch = useDispatch()

  const shortenText=(text, n)=>{
    if (text.length > n){
      const shortenedText = text.substring(0, n).concat("...")
      return shortenedText;
    }
    return text
  };

  const addToCart=(product)=>{
    dispatch(ADD_TO_CART(product))
  }

  return (
    <div className="bg-back">
      <div className='lg:w-3/4 w-3/4 mx-auto'>
      <Link to={`/product-details/${id}`}>
        <div className='w-full mt-10'>
          <img className='w-full h-48' src={image} alt={title} />
        </div>
        </Link>
        <div className=''>
          <div className='text-center'>
            <p className='text-sm pt-2'>{`₸${price}`}</p>
            <p className='text-xl font-semibold pb-2'>{shortenText(title, 18)}</p>
            <button className='bg-[#a98467] text-[#fcfcfc] py-2 px-3 rounded-md' onClick={() => addToCart(product)}>Добавить в Корзину</button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default ProductItem