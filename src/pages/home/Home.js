import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

 function Home() {
  return (
    <div className='home bg-back w-full'>
      <div className='cont'>
        <img className='lg:w-full lg:block hidden h-96' src={require('../../assets/bg-1.webp')} alt=""/>
        <div className=' text-2xl hidden lg:block w-full lg:w-2/6 centered font-mono'>Любимые альбомы на виниле Выбери В Нашем Онлайн Магазине</div>
      </div>
      <div className='pt-15 text-center mx-auto'>
        <p className='mt-10 text-[#704e19] font-semibold text-2xl'>Мы Онлайн Магазин По Продаже Виниловых Пластинок</p>
        <p className='w-1/2 mx-auto pt-3'>Наш магазин удобный, поможет быстро найти товар, доставка происходит по всему РК. Если не нашли то, что искали <a href='/products' className='text-[#704e19]'>Свяжитесь с Нами</a> и мы найдем его!</p>
        <div className='pt-10'>
        <Link className='bg-[#a98467] text-[#fcfcfc] py-2 px-3 rounded-md'>Перейти в магазин</Link>
        </div>
      </div>
      <div className='pt-20 pb-10'>
        <p className='text-3xl text-center text-[#704e19] pb-7'>Наши Коллекции</p>
        <div className='lg:flex block items-center mx-auto lg:w-3/4 w-1/2'>
            <div className='h-3/4'>
              <div className='py-2'>
                <Link to="/newproducts">
                 <img className='w-full' alt="new" src={require('../../assets/new_lp.jpg')}/>
                </Link>
              </div>
              <div className=''>
             <Link to="/christmas">
             <img className='w-full' alt="christmas" src={require('../../assets/christmas.jpg')}/>
             </Link>
              </div>
            </div>
            <div className='ml-10'>
              <div className='lg:w-full object-cover'>
                <Link to="/popularproducts">
                <img className='w-full h-full' alt="popular" src={require('../../assets/popular_lp.jpg')}/>
                </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home