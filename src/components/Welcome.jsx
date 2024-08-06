import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 sm:pt-24 lg:pt-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
          <img 
            src='https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-20156.jpg?t=st=1722932091~exp=1722935691~hmac=8c6a41d9c31c045ea2f3c975b348847f8ddd38e896431a6cbd92d18deb077028&w=740' 
            className="w-3/4 h-auto max-w-md object-cover object-center" 
            alt="Shopping"
            />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Shopping made easy</h1>
            <p className="mt-4 text-xl text-gray-500">Your One-Stop Shop for Everything You Need</p>
          </div>
          <div className="mt-10">
            <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img 
                        src="https://img.freepik.com/free-vector/choosing-clothes-concept-illustration_114360-3096.jpg?w=740&t=st=1722931565~exp=1722932165~hmac=d4cb961554ef4bad27cd9561a4c76ffe9b20d6c0ae780af5da891022d0a1d60b" 
                        alt="" 
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img 
                        src="https://img.freepik.com/free-vector/online-shop-page-tablet_74855-5906.jpg?t=st=1722931642~exp=1722935242~hmac=ec8661eab401d32f1297a4ce9b780c39d60c89f1ff91d829eb55b7893bf4fcf8&w=826" 
                        alt="" 
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img 
                        src="https://img.freepik.com/premium-photo/home-appliances-gas-cooker-tv-cinema-refrigerator-air-conditioner-microwave-laptop-washing-machine_252025-693.jpg?w=900" 
                        alt="" 
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img 
                        src="https://img.freepik.com/free-photo/living-room-scandinavian-interior-design_53876-146865.jpg?t=st=1722931568~exp=1722935168~hmac=60cca5328dd2857a7e749aea48b0dcc4d1ad856dd8bc79397dec8351094da75c&w=996" 
                        alt="" 
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img 
                        src="https://img.freepik.com/free-vector/realistic-fashionable-aviator-sunglasses-poster_1284-37411.jpg?t=st=1722931700~exp=1722935300~hmac=63ab9e72bbe1cc512ba13bfaa6ef6f3de6964d2e4c804f491808fde51a1197e9&w=826" 
                        alt="" 
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img 
                        src="https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?t=st=1722931807~exp=1722935407~hmac=dc003c127959a12a98745ad304766e263595fb54393003837f5bed46cbae7714&w=996" 
                        alt="" 
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img 
                        src="https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448737.jpg?t=st=1722931840~exp=1722935440~hmac=a6591a5a44a797c9e9568950769e393867cc2eb9d67023949629678d35645fc0&w=996" 
                        alt="" 
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-8">
              <Link to="/login">
                <button className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 mr-4">Login</button>
              </Link>
              <Link to="/signup">
                <button className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
