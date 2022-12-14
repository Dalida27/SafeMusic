import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_BY_CONDITION, FILTER_BY_GENRE, FILTER_BY_PRICE } from '../../../redux/slice/filterSlice'
import { selectMaxPrice, selectMinPrice, selectProducts } from '../../../redux/slice/productSlice'
import './ProductFilter.css'

const ProductFilter = () => {
  const [genre, setGenre] = useState("Все")
  const [condition, setCondition] = useState("Все");
  const [price, setPrice] = useState(70.555)
  const products = useSelector(selectProducts)
  const minPrice = useSelector(selectMinPrice)
  const maxPrice = useSelector(selectMaxPrice)

  const dispatch = useDispatch()

  const allGenres = [
    "Все",
    ...new Set(products.map((product) => product.genre))
  ];
  const allConditions = [
    "Все",
    ...new Set(products.map((product) => product.condition))
  ]
  // console.log(allConditions);

  useEffect(() =>{
    dispatch(FILTER_BY_CONDITION({products, condition}))
  }, [dispatch, products, condition])

  useEffect(() =>{
    dispatch(FILTER_BY_PRICE({products, price}))
  }, [dispatch, products, price])

  const filterProducts = (gen) => {
    setGenre(gen)
    dispatch(FILTER_BY_GENRE({ products, genre: gen }))
  };

  const clearFilters = () => {
    setGenre("Все")
    setCondition("Все")
    setPrice(maxPrice)
  }

  return (
    <div className='text-[#141010] filter w-full ml-3 pt-3'>
      <div>
        <p className='text-xl font-semibold text-[#704e19]'>Категории:</p>
        <div>
        <a className='text-[#704e19]' href='/products'>Все</a>
        </div>
        <div className='py-2'>
        <a className='text-[#704e19]' href='/newproducts'>Новинки</a>
        </div>
        <a  className='text-[#704e19]' href="/popularproducts">Популярные</a>
      </div>
      <p className='text-xl font-semibold text-[#704e19] pt-3'>Жанры:</p>
      <div className='category pt-3 text-[#704e19]'>
        {allGenres.map((gen, index) => {
          return (
            <button key={index} type="button" className={`${genre}` === gen ? 'active' : null} onClick={() => filterProducts(gen)}>&#8250; {gen}</button>
          )
        })}
      </div>
      <p className='text-xl pt-7 text-[#704e19] font-semibold'>Состояние:</p>
      <div className='brand'>
        <select className='text-[#704e19] bg-back' value={condition} onChange={(e) => setCondition(e.target.value)} >
          {allConditions.map((condition, index) => {
            return(
              <option key={index} value={condition}>{condition}</option>
            )
          })}
        </select>
      </div>
      <p className='text-xl pt-7 text-[#704e19] font-semibold'>Цена:</p>
      <p>{`₸${price}`}</p>
      <div className='price'>
        <input type="range" value={price} onChange={(e) => setPrice(e.target.value)} min={minPrice} max={maxPrice} />
      </div>
      <br />
      <button onClick={clearFilters} className='bg-[#a98467] text-[#fcfcfc] py-2 px-3 rounded-md'>Очистить фильтры</button>
    </div>
  )
}

export default ProductFilter