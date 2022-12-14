import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Loader from "../../components/loader/Loader"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const registerUser = (e) => {
    e.preventDefault()
    if(password !== cPassword) {
        toast.error("Пароли не совпадают...")
    }
    setIsLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setIsLoading(false)
          toast.success("Успешно Зарегистрирован...")
          navigate("/login")
        })
        .catch((error) => {
          toast.error(error.message)
          setIsLoading(false)
    });

  }

  return (
    <>
      {isLoading && <Loader />}
    <div className="lg:flex block w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl mt-20 mb-20">
    <div className='lg:w-1/2 w-full'>
     <img src={require('../../assets/register.png')} alt="register"/>
    </div>
    <div className="w-1/2 px-6 py-8 md:px-8 lg:w-1/2 mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-700">
            Регистрация
        </h2>

        <form onSubmit={registerUser}>
          <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600">Email Адрес</label>
              <input required value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
          </div>

          <div className="mt-4">
              <div className="flex justify-between">
                  <label className="block mb-2 text-sm font-medium text-gray-600">Пароль</label>
              </div>
              <input required value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
          </div>
          <div className="mt-4">
              <div className="flex justify-between">
                  <label className="block mb-2 text-sm font-medium text-gray-600">Потвердите Пароль</label>
              </div>
              <input required value={cPassword} onChange={(e) => setCPassword(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
          </div>
          <div className="mt-8 text-center">
              <button type="submit" className="lg:w-1/2 w-full px-4 py-2 text-white border rounded">
                  Потвердить
              </button>
          </div>
        </form>

        <div className="lg:flex block items-center justify-between mt-4">
            <span className="lg:w-1/5 w-full border-b md:w-1/4"></span>

            <a href="/login" className="text-sm text-gray-500 hover:underline">Уже есть аккаунт? <span className=''>Войти</span></a>

            <span className="w-1/5 border-b md:w-1/4"></span>
        </div>
    </div>
</div>
</>
  )
}

export default Register