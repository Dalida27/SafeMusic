import { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import Loader from "../../components/loader/Loader"

 const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const loginUser = (e) => {
        e.preventDefault()
        setIsLoading(true)

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setIsLoading(false)
            toast.success("Успешно вошли...");
            navigate("/")
        })
        .catch((error) => {
            setIsLoading(false)
            toast.error(error.message)
        });
    }

    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            toast.success("Успешно Вошли...")
            navigate("/")
        }).catch((error) => {
            toast.error(error.message)
        });
    }


  return (
    <>
    {isLoading && <Loader />}
    <div className="lg:flex block w-full pt-48max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl mt-20 mb-20">
    <div className='lg:w-1/2 w-full'>
     <img src={require('../../assets/login.png')} alt="login"/>
    </div>
        <div className="w-1/2 px-6 py-8 md:px-8 lg:w-1/2 mx-auto">
            <h2 className="text-3xl font-semibold text-center text-gray-700">
                Hello
            </h2>
            <p className="text-xl text-center text-gray-600">
                С Возвращением!
            </p>
            <p className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50">
                <div className="px-4 py-2">
                    <svg className="w-6 h-6" viewBox="0 0 40 40">
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                    </svg>
                </div>
                <button onClick={signInWithGoogle} className="lg:w-5/6 w-full px-4 py-3 font-bold text-center">Вход через Google</button>
            </p>
            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b lg:w-1/4"></span>

                <a href="/" className="text-xs text-center text-gray-500 uppercase hover:underline">или вход через почту</a>

                <span className="w-1/5 border-b lg:w-1/4"></span>
            </div>


            <form onSubmit={loginUser}>
                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600">Email Адрес</label>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                </div>

                <div className="mt-4">
                    <div className="flex justify-between">
                        <label className="block mb-2 text-sm font-medium text-gray-600">Пароль</label>
                        <a href="/reset" className="text-xs text-gray-500 hover:underline">Забыли Пароль?</a>
                    </div>

                    <input required value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                </div>
                <div className="mt-8 text-center">
                    <button type="submit" className="w-1/2 px-4 py-2 text-white border rounded">
                        Вход
                    </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b md:w-1/4"></span>
                    <a href="/register" className="text-xs text-gray-500 uppercase hover:underline">или Зарегистрируйтесь</a>
                    <span className="w-1/5 border-b md:w-1/4"></span>
                </div>
            </form>
        </div>
</div>
</>
  )
}
export default Login
