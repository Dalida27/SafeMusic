import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { deleteObject, getStorage, ref } from 'firebase/storage'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import useFetchCollection from '../../../customHooks/useFetchCollection'
import { selectProducts, STORE_PRODUCTS } from '../../../redux/slice/productSlice'
import { db } from '../../../utils/firebase'
import Loader from '../../loader/Loader'
import './ViewProducts.css'

const ViewProducts = () => {
  const { data, isLoading} = useFetchCollection("products")
  const products = useSelector(selectProducts)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(
              STORE_PRODUCTS({
                products: data,
              })
            )
  }, [dispatch, data])

  const deleteProduct = async(id, image) => {
    try{
      await deleteDoc(doc(db, "products", id));

      const storage = getStorage();
      const storageRef = ref(storage, image);

      await deleteObject(storageRef)
      toast.success("Product deleted successfully")
    }catch(error){
      toast.error(error.message)
    }
  }
  return (
    <>
    {isLoading &&  <Loader/>}
      <div className='table'>
        <p>View All Products</p>

        {products.length === 0 ? (
          <p>No product found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>s/n</th>
                <th>Image</th>
                <th>Title</th>
                <th>Condition</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            {products.map((product, index) => {
              const {id, title, price, image, condition} = product;
              return (
                <tr key={id}>
                  <td>
                    {index + 1}
                  </td>
                  <td>
                    <img className='w-24' src={image} alt={title} />
                  </td>
                  <td>
                    {title}
                  </td>
                  <td>
                    {condition}
                  </td>
                  <td>
                    {`₸${price}`}
                  </td>
                  <td className='flex'>
                    <Link to={`/admin/add-product/${id}`}>
                    <p className='text-[#7dd87d]'><i class="fas fa-edit"></i></p>
                    </Link>
                    &nbsp;
                    <p onClick={() => deleteProduct(id,image)} className='text-[#eb2632] ml-5'><i class="fas fa-trash"></i></p>
                  </td>
                </tr>
              )
            })}
          </table>
        )}
      </div>
    </>
  )
}

export default ViewProducts