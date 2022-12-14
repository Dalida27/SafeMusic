import { sendPasswordResetEmail } from 'firebase/auth';
import {useState} from 'react'
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';
import { auth } from '../../utils/firebase';

const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const resetPassword = (e) => {
    e.preventDefault()
    setIsLoading(true)

    sendPasswordResetEmail(auth, email)
    .then(() => {
      setIsLoading(false)
      toast.success("Check your email...")
    })
    .catch((error)=>{
      setIsLoading(false)
      toast.error(error.message)
    })
  }

  return (
    <>
    {isLoading && <Loader />}
    <div className='mt-20 '>
      <div className='flex w-3/4 justify-between mx-auto'>
        <div className='w-1/2'>
          <img src={require('../../assets/reset.png')} />
        </div>
        <div className='w-1/2'>
            <form onSubmit={resetPassword}>
                <p className='text-center text-2xl font-semibold'>Восстановление пароля</p>
                <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600">Email Адрес</label>
                        <input required value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md" type="email" placeholder='Email'/>
                    </div>
                <div className='text-center pt-5'>
                <button type="submit" className='bg-blue-400 border py-2 px-3 rounded-md'>Восстановить пароль</button>
                </div>
                <div className='flex w-3/4 pt-3 mx-auto justify-between'>
                  <a>Логин</a>
                  <a>Регситрация</a>
                </div>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Reset