import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { db } from '../../../utils/firebase'
import loadingImg from '../../../assets/loader.gif'
import './ProductDetails.css'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART, CALCULATE_TOTAL_QUANTITY, DECREASE_CART, selectCartItems } from '../../../redux/slice/cartSlice'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  const dispatch = useDispatch()

  const cartItems = useSelector(selectCartItems)

  const cart = cartItems.find((cart) => cart.id === id)

  const isCartAdded = cartItems.findIndex((cart) => {
    return cart.id === id
  })

  const getProduct = async () => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      const obj = {
        id: id,
        ...docSnap.data()
      }
      setProduct(obj)
    } else {
      toast.error("Product not Found...")
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  const addToCart = (product) => {
    dispatch(ADD_TO_CART(product))
    dispatch(CALCULATE_TOTAL_QUANTITY())
  }
  
  const decreaseCart = () => {
    dispatch(DECREASE_CART(product));
    dispatch(CALCULATE_TOTAL_QUANTITY());
  }


  return (
    <section className='bg-back'>
      <div>
          <Link className="text-[#222831] text-lg lg:mb-3 mb-5" to="/products">&larr; Обратно в магазин</Link>
        </div>
      <div className=''>
        {product === null ? (
          <img className='w-64 mx-auto' src={loadingImg} alt="Loading" />
        ) : (
          <>
            <div className='details lg:flex block'>
              <div className='mx-auto'>
                <img className='w-3/4 mx-auto' src={product.image} alt={product.title} />
              </div>
              <div className='ml-20 block mx-auto'>
                <div className='lg:flex block'>
                  <div>
                    <p className='text-[#a98467] text-3xl font-semibold'>{product.title}</p>
                    <p className='text-[#a98467] text-2xl  font-semibold'>{product.singer}</p>
                  </div>
                  <p className='text-[#222831] text-sm pt-2 lg:ml-10'><span className='text-[#a98467] font-semibold'>Артикул:</span>{product.id}</p>
                </div>
                <div className='justify-star lg:pt-10 pt-5'>
                <p className='price text-[#222831]'><span className='text-[#a98467] text-lg font-semibold'>Цена: </span>{`₸${product.price}`}</p>
                <p className='price text-[#222831]'><span className='text-[#a98467] text-lg font-semibold'>Жанр: </span>{product.genre}</p>
                <p className='price text-[#222831]'><span className='text-[#a98467] text-lg font-semibold'>Состояние: </span>{product.condition}</p>
                <p className='price text-[#222831]'><span className='text-[#a98467] text-lg font-semibold'>Год выпуска: </span>{product.year}</p>
                </div>
                <div className='count text-[#222831] flex py-7'>
                  {isCartAdded < 0 ? null : (
                    <>
                    <button onClick={() => decreaseCart(product)}><span>-</span></button>
                    <p>{cart.cartQuantity}</p>
                    <button onClick={() => addToCart(product)}>+</button>
                    </>
                  )}
                </div>
                <button onClick={() => addToCart(product)} className='bg-[#a98467] text-[#fcfcfc] py-2 px-3 rounded-md mb-5'>Добавить в Корзину</button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default ProductDetails