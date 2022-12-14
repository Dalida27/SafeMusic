import React from 'react'
import './Payment.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Payment = () => {
  const navigate = useNavigate()

  const submitPayment = () =>{
    toast.success("Успешно оплатили...");
    navigate("/")
  }
  return (

    <div className='text-[#a98467] main'>
      <div className='secondly'>

        <form className='' action="">

          <div className='row'>

            <div className='col'>
              <h3 className='title'>Billing Address</h3>
              <div className='inputBox'>
                <span>Full name:</span>
                <input type="text" placeholder='Alex Smith' />
              </div>
              <div className='inputBox'>
                <span>Email:</span>
                <input type="email" placeholder='example@gmail.com' />
              </div>
              <div className='inputBox'>
                <span>Address:</span>
                <input type="text" placeholder='room - street - locality' />
              </div>
              <div className='inputBox'>
                <span>City:</span>
                <input type="text" placeholder='Almaty' />
              </div>
              <div className='flex'>
                <div className='inputBox'>
                  <span>Country:</span>
                  <input type="text" placeholder='Kazakhstan' />
                </div>
                <div className='inputBox'>
                  <span>Zip Code:</span>
                  <input type="text" placeholder='123 456' />
                </div>
              </div>
            </div>

            <div className='col'>
              <h3 className='title'>payment</h3>

              <div className='inputBox'>
                <span>Card Accepted</span>
                <img src={require('../../assets/card_img.png')} alt="Logo" />
              </div>

              <div className='inputBox'>
                <span>Name on Card:</span>
                <input type="text" placeholder='mr. alex smith' />
              </div>
              <div className='inputBox'>
                <span>Credit Card Number:</span>
                <input type="number" placeholder='1111-2222-3333-4444' />
              </div>
              <div className='inputBox'>
                <span>Exp Month:</span>
                <input type="text" placeholder='january' />
              </div>
              <div className='flex'>
                <div className='inputBox'>
                  <span>Exp Year:</span>
                  <input type="number" placeholder='2024' />
                </div>
                <div className='inputBox'>
                  <span>CVV:</span>
                  <input type="text" placeholder='1234' />
                </div>
              </div>
            </div>

          </div>

          <button type='submit' onClick={submitPayment} className='submit-btn'>Proceed to Checkout</button>

        </form>
      </div>

    </div>

  )
}

export default Payment