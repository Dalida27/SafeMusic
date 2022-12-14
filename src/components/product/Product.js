import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useFetchCollection from '../../customHooks/useFetchCollection'
import { GET_PRICE_RANGE, selectProducts, STORE_PRODUCTS } from '../../redux/slice/productSlice'
import './Product.css'
import ProductFilter from './productFilter/ProductFilter'
import ProductList from './productList/ProductList'
import spinnerImg from '../../assets/spinner.gif'

const Product = () => {
  const { data, isLoading } = useFetchCollection("products")
  const [showFilter, setShowFilter] = useState(false)
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );

    dispatch(GET_PRICE_RANGE({
      products: data
    }))
  }, [dispatch, data])

  const toggleFilter = () => {
    setShowFilter(!setShowFilter)
  }
  return (
    <section className='bg-back'>
      <div className='product flex w-full'>
        <aside className={showFilter ? 'filter show' : 'filter'}>
          {isLoading ? null : <ProductFilter />}
        </aside>
        <div className='content w-full'>
          {isLoading ? (<img src={spinnerImg} alt="spinner" className='w-96 mx-auto' />) : (
            <ProductList products={products} />
          )}

          <div className='icon' onClick={toggleFilter}>
            <p className='text-lg text-[#704e19]'><i class="fas fa-filter"></i></p>
            <p>
              <b>{showFilter ? "Убрать Фильтр" : "Показать Фильтр"}</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
