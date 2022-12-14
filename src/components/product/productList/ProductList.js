import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_BY_SEARCH, selectFilteredProducts, SORT_PRODUCTS } from '../../../redux/slice/filterSlice'
import Pagination from '../../pagination/Pagination'
import Search from '../../search/Search'
import ProductItem from '../productItem/ProductItem'
import "./ProductList.css"
const ProductList = ({products}) => {
  const [grid] = useState(true)
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("latest")

  const filteredProducts = useSelector(selectFilteredProducts)

  //Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(6)
  //Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)


  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(SORT_PRODUCTS({products, sort}))
  }, [dispatch, products, sort]);

  useEffect(()=>{
    dispatch(FILTER_BY_SEARCH({products, search}))
  }, [dispatch, products, search]);

  return (
    <div className='text-[#141010] product-list pb-20' id="product">
      <div className='top'>
        <div className='icons'>
          {/* <p onClick={()=> setGrid(true)} className='text-lg'><i class="fas fa-th-large"></i></p>
          <p onClick={()=> setGrid(false)} className='text-lg'><i class="fas fa-list"></i></p> */}
          <p>
            Найдено <b>{filteredProducts.length}</b> продуктов.
          </p>
        </div>

        <div>
          <Search value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>

        <div className='sort'>
          <label>Сортировать по:</label>
          <select className='bg-back' value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="latest">Последним</option>
            <option value="lowest-price">Низкая Цена</option>
            <option value="highest-price">Высокая Цена</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </div>
      </div>

      <div className={grid ? `gridd` : `list`}>
          {products.lenght === 0 ? (
            <p>No product found.</p>
          ) : (
            <>
              <div className='lg:w-4/5 lg:flex lg:flex-wrap w-3/4 block bg-back'>
              {currentProducts.map((product) =>{
                return(
                  <div className='lg:w-1/3 w-3/4 mx-auto' key={product.id}>
                    <ProductItem {...product}  product={product}/>
                  </div>
                )
              })}
              </div>
            </>
          )}
      </div>
      <Pagination 
        currentPage={currentPage}
        setCurrentPage = {setCurrentPage}
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
      />
    </div>
  )
}

export default ProductList
