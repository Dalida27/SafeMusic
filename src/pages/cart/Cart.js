import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ADD_TO_CART, CALCULATE_SUBTOTAL, CALCULATE_TOTAL_QUANTITY, CLEAR_CART, DECREASE_CART, REMOVE_FROM_CART, selectCartItems, selectCartTotalAmount, selectCartTotalQuantity } from '../../redux/slice/cartSlice'
import './Cart.css'

const Cart = () => {

  const cartItems = useSelector(selectCartItems)
  const cartTotalAmount = useSelector(selectCartTotalAmount)
  const cartTotalQuantity = useSelector(selectCartTotalQuantity)

  const dispatch = useDispatch()

  const increaseCart = (cart) => {
    dispatch(ADD_TO_CART(cart))
  }

  const decreaseCart = (cart) => {
    dispatch(DECREASE_CART(cart))
  }

  const removeFromCart = (cart) =>{
    dispatch(REMOVE_FROM_CART(cart));
  }

  const clearCart = () => {
    dispatch(CLEAR_CART());
  };

  useEffect(() =>{
    dispatch(CALCULATE_SUBTOTAL());
    dispatch(CALCULATE_TOTAL_QUANTITY());
  }, [dispatch, cartItems])

  return (
    <section>
      <div className='container table'>
        <p className='text-3xl text-[#141010] text-start font-semibold pb-7'>Корзина</p>
        {cartItems.length === 0 ? (
          <>
          <p className='text-[#141010]'>Твоя корзина в данный момент пуста</p>
          <br />
          <div className='text-[#141010]'>
            <Link to="/products">
            &larr; Продолжить Покупки...
            </Link>
          </div>
          </>
        ) : (
          <>
          <table>
            <thead>
              <tr className='text-[#141010]'>
                <th>s/n</th>
                <th>Продукт</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Общий</th>
                <th>Действие</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cart, index) => {
                const {id, title, price, image, cartQuantity} = cart;
                return(
                  <tr key={id} className='text-[#141010]'>
                    <td>{index +1 }</td>
                    <td>
                      <p>
                        <b>{title}</b>
                      </p>
                      <img className='w-28' src={image} alt={title} />
                    </td>
                    <td>{price}</td>
                    <td>
                      <div className='count'>
                          <button onClick={() => decreaseCart(cart)}>-</button>
                          <p><b>{cartQuantity}</b></p>
                          <button onClick={() => increaseCart(cart)}>+</button>
                      </div>
                    </td>
                    <td>
                      <p>{(price * cartQuantity).toFixed(2)}0</p>
                    </td>
                    <td className='icons'>
                      <p onClick={() => removeFromCart(cart)} className='text-lg text-[#dc2f2f]'><i class="fas fa-trash"></i></p>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className='summary'>
              <button onClick={clearCart}  className='bg-[#a98467] text-[#fcfcfc] py-2 px-3 rounded-md'>Очистить Корзину</button>
          <div className='checkout'>
              <div className='text-[#141010] border-b font-semibold'>
                <Link to="/products">&larr; Вернуться в магазин</Link>
              </div>
              <br/>
              <div className='card'>
                <p className='text-[#141010]'><span className='text-[#a98467] font-semibold'>Количество вещей:</span>{` ${cartTotalQuantity}`}</p>
                <div className='text-center text-[#141010] py-2'>
                  <p><span className='text-[#a98467] font-semibold'>Итого:</span> {`₸${cartTotalAmount.toFixed(2)}`}0</p>
                </div>
              </div>
              <p className='text-[#757a79]'>Налоги и стоимость доставки рассчитываются при оформлении заказа</p>
              <div className='my-5'>
              <a href="/payment" className='bg-[#a98467] text-[#fcfcfc] py-2 px-3 rounded-md mt-1'>Оформить Заказ</a>
              </div>
          </div>
          </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Cart
