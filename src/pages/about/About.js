import React from 'react'

const About = () => {
  return (
    <div className=' bg-back'>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="lg:flex block flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              О Нас
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Интернет-магазин SafeMusic сделан нами для того, что бы создать для вас более тесную связь с музыкой, что бы сделать доступными как новинки, так и музыкальную классику для всех любителей музыки.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Наша Миссия
                </h6>
                <p className="text-sm text-gray-900">
                Наша миссия - это то, что побуждает нас прославлять и делать доступной историю,  культуру и искусство великих альбомов и исполнителей.
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Наша Цель
                </h6>
                <p className="text-sm text-gray-900">
                Наша цель – предоставлять возможность меломанам Казахстана  покупать диски по приемлемым ценам, обеспечивать лучший сервис, время доставки и поддержку наших клиентов.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={require('../../assets/about.png')}
            alt=""
          />
        </div>
      </div>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
          <p className="mb-1 text-xs font-semibold tracking-wide uppercase md:mb-2 text-center lg:pt-1 pt-5">
            Новая История
          </p>
          <p className="text-base text-gray-700 md:text-lg">
          Порой хочется остановиться от вечной спешки и суеты - взять в руки виниловый диск, рассмотреть его красивую обложку, вынуть из конверта, поставить на проигрыватель, опустить иглу и погрузиться в блаженство звука… 
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src={require('../../assets/about2.jpeg')}
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              A slice of heaven
            </h5>
            <p className="text-gray-700">
              O for awesome, this chocka full cuzzie is as rip-off as a cracker.
              Meanwhile, in behind the bicycle shed, Hercules Morse.
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src={require('../../assets/about3.jpeg')}
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Disrupt inspire
            </h5>
            <p className="text-gray-700">
              I'll be sure to note that in my log. Smooth as an android's bottom,
              eh, Data? When has justice ever been as simple as a rule book?
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src={require('../../assets/about3.webp')}
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Storage shed
            </h5>
            <p className="text-gray-700">
              Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              suscipit leo. Carpe diem vulputate est nec commodo rutrum.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default  About
