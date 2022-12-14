import React, { useEffect, useState } from 'react';
import { db } from "../../utils/firebase";
import {collection, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom';

 function NewProducts() {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "newproducts")


  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    };

    getProducts() 
  }, []);
  return (
    <>
    <div className=''>
      <div className='bg-back font-mono text-[#a98467]'>
          <div className='text-center w-3/5 mx-auto pt-5 pb-10'>
            <p className='text-3xl font-bold'>Новое поступление</p>
            <p className='pt-3 font-semibold'>В ассортименте нашего магазина постоянно появляются новые виниловые пластинки. Если вы не нашли в нашем каталоге какой-либо новый релиз, то можете связаться с нами по электронной почте или WhatsApp и мы постараемся привезти его для вас.</p>
          </div>
      </div>
      <div className='flex justify-between text-[#a98467]'>
        <div className='w-1/5 bg-back pt-15'>
          <p className=' text-center text-2xl font-semibold border-b border-[#704e19] py-2'>Фильтр</p>
          <div className='ml-3 block'>
            <p className='py-3 text-xl font-semibold'>Коллекция</p>
            <div>
              <Link to="/products" className='hover:border-b hover:border-[#704e19]'>Все</Link>
            </div>
            <div className='py-3'>
              <a href="/newproducts" className='py-2 hover:border-b hover:border-[#704e19]'>Новинки</a>
            </div>
            <div>
              <a href="/popularproducts" className='hover:border-b hover:border-[#704e19]'>Популярное</a>
            </div>
          </div>
        </div>
        <div className='w-4/5 flex flex-wrap justify-end bg-back'>
          {products.map((product) => {
            return <article className='w-1/3' key={product.id}>
              <div>
                <div class="w-3/4 mx-auto mt-8 md:mt-16 md:grid-cols-2  hover:border-[#a98467]">
                  <div class="mx-auto hover:border-b hover:border-[#a98467] rounded-md py-2 px-3">
                      <img class="w-3/4 h-56 rounded-lg lg:w-full mx-auto"  src={product.image} alt="" />
                      <div class="py-3 lg:mx-6">
                          <p class="text-xl text-center font-semibold text-gray-800 ">
                            { product.title }
                          </p>
                      </div>
                      <div className='text-center'>
                        <button className='bg-[#a98467] text-[#fffaf2] py-2 px-5 rounded-md font-semibold border border-[#704e19]'>Добавить В Корзину</button>
                      </div>
                  </div>
                </div>  
            </div>
            </article>
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default NewProducts;