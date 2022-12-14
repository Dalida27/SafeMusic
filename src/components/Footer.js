import React from 'react'

 const Footer = () => {
  return (
    
<footer className="p-4 bg-white bg-back sm:p-6 border border-t pt-10">
    <div className="md:flex md:justify-between">
          <div className='flex items-center w-1/4'>
            <img className="w-1/4" src={require('../assets/logo.webp')} alt=""/> 
            <p className='text-3xl text-[#a98467] font-semibold text-yellow-400'>SafeMusic</p>
          </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 lg:pt-2 pt-5">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Страницы</h2>
                <ul className="text-gray-600">
                    <li className="mb-4">
                        <a href="/about" className="hover:underline hover:text-[#a98467]">О Нас</a>
                    </li>
                    <li>
                        <a href="/products" className="hover:underline hover:text-[#a98467]">Онлайн Магазин</a>
                    </li>
                    <li className="mt-4">
                        <a href="/login" className="hover:underline hover:text-[#a98467]">Вход</a>
                    </li>
                </ul>
            </div>
            <div className='mr-28'>
                <h2 className="mb-6 text-sm font-semibold lg:w-full w-full text-gray-900 uppercase">Следи за нами</h2>
                <ul className="text-gray-600">
                    <li className="mb-4">
                        <a href="https://github.com/themesberg/flowbite" className="hover:underline hover:text-[#a98467]">Instagram</a>
                    </li>
                    <li>
                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline hover:text-[#a98467]">Discord</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Связаться с нами</h2>
                <ul className="text-gray-600">
                    <li className="mb-4">
                        <p>Телефон/Whatsapp:</p>
                        <p className='mt-2'>+7-777-777-7777</p>
                    </li>
                    <li>
                        <a href="/" className="hover:underline hover:text-[#a98467]">example@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">© 2022 <a href="/" className="hover:underline">SafeMusic™</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="/" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-facebook"></i>
                <span className="sr-only">Facebook page</span>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-instagram"></i>
                <span className="sr-only">Instagram page</span>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-twitter"></i>
                <span className="sr-only">Twitter page</span>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-github"></i>
                <span className="sr-only">GitHub account</span>
            </a>
        </div>
    </div>
</footer>

  )
}

export default Footer
