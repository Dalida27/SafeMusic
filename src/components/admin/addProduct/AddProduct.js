import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore'
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { selectProducts } from '../../../redux/slice/productSlice'
import { db } from '../../../utils/firebase'
import Loader from "../../loader/Loader"
import './AddProduct.css'

const conditions = [
  { id: 1, name: "Very Good" },
  { id: 2, name: "Good" },
  { id: 3, name: "Middle" },
]

const initialState = {
  title: "",
  singer: "",
  condition: "",
  year: 0,
  image: "",
  price: 0,
  genre: "",
}

const AddProduct = () => {
  const { id } = useParams()
  const products = useSelector(selectProducts)
  const productEdit = products.find((item) => item.id === id)


  const [product, setProduct] = useState(() => {
    const newState = detectForm(id, 
     {...initialState},
     productEdit 
    )
    return newState;
  });


  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  function detectForm(id, f1, f2) {
    if (id === "ADD") {
      return f1;
    }
    return f2
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    // console.log(file)

    const storage = getStorage();
    const storageRef = ref(storage, `safemusic/${Date.now()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress)
      },
      (error) => {
        toast.error(error.message)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProduct({ ...product, image: downloadURL })
          toast.success("Image uploaded successfully...")
        });
      }
    );
  };

  const addProduct = (e) => {
    e.preventDefault()
    // console.log(product);
    setIsLoading(true)

    try {
      const docRef = addDoc(collection(db, "products"), {
        title: product.title,
        singer: product.singer,
        condition: product.condition,
        year: Number(product.year),
        image: product.image,
        price: Number(product.price),
        genre: product.genre,
        createdAt: Timestamp.now().toDate()
      });
      setIsLoading(false)
      setUploadProgress(0)
      setProduct({ ...initialState })
      toast.success("Product uploaded successfully")

      navigate("/admin/all-products")
    } catch (error) {
      setIsLoading(false)
      toast.error(error.message)
    }
  }

  const editProduct = (e) => {
    e.preventDefault()
    // console.log(product);
    setIsLoading(true)

    if (product.image !== productEdit.image) {
      const storage = getStorage();
      const storageRef = ref(storage, productEdit.image);
      deleteObject(storageRef)
    }

    try {
      setDoc(doc(db, "products", id), {
        title: product.title,
        singer: product.singer,
        condition: product.condition,
        year: Number(product.year),
        image: product.image,
        price: Number(product.price),
        genre: product.genre,
        createdAt: productEdit.createdAt,
        editedAt: Timestamp.now().toDate()
      });

      setIsLoading(false)
      toast.success("Product edited successfully")
      navigate("/admin/all-products")
    } catch (error) {
      setIsLoading(false)
      toast.error(error.message)
    }
  }
  return (
    <>
      {isLoading && <Loader />}
      <div className='product'>
        <p className='text-3xl'>{detectForm(id, "Add New Product", "Edit Product")}</p>
        <div className='card'>
          <form onSubmit={detectForm(id, addProduct, editProduct)}>
            <label>Product title:</label>
            <input type="text" name="title" placeholder='Product title...' required value={product.title} onChange={(e) => handleInputChange(e)} />

            <label>Product image:</label>
            <div className='group'>
              {uploadProgress === 0 ? null : (
                <div className='progress'>
                  <div className='progress-bar' style={{ width: `${uploadProgress}%` }}>
                    {uploadProgress < 100 ? `Uploading... ${uploadProgress}` : `Uload Complete ${uploadProgress}%`}
                  </div>
                </div>
              )}


              <input type="file" accept="image/*" placeholder='Product Image...' name="image" onChange={(e) => handleImageChange(e)} />
              {product.image === "" ? null : (
                <input type="text" required name="image" value={product.image} disabled placeholder='Image URL...' />
              )}
            </div>

            <label>Product price:</label>
            <input type="number" name="price" placeholder='Product price...' required value={product.price} onChange={(e) => handleInputChange(e)} />

            <label>Product condition:</label>
            <select required name="condition" value={product.condition} onChange={(e) => handleInputChange(e)}>
              <option disabled value="">
                -- choose product condition --
              </option>
              {conditions.map((con) => {
                return (
                  <option key={con.id} value={con.name}>
                    {con.name}
                  </option>
                )
              })}
            </select>

            <label>Product genre:</label>
            <input type="text" name="genre" placeholder='Product genre...' required value={product.genre} onChange={(e) => handleInputChange(e)} />

            <label>Product singer:</label>
            <input type="text" name="singer" placeholder='Product singer...' required value={product.singer} onChange={(e) => handleInputChange(e)} />

            <label>Product year:</label>
            <input type="number" name="year" placeholder='Product year...' required value={product.year} onChange={(e) => handleInputChange(e)} />

            <button className='text-[#a98467] font-semibold border-2 py-2 px-3 rounded-md border-[#a98467]'>{detectForm(id, "Save Product", "Edit Product")}</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddProduct