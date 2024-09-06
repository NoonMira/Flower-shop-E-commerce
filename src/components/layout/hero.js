import React from 'react'
import Link from 'next/link';
import SliceImage from './sliceImage'
import PropTypes from 'prop-types'

export default function Hero(props) {
  const texts = [{ text: "Order Flowers", href: "/menu" },
				{ text: "Event Planning", href: "/collections/event" }
  ]
  return (
    <>
<div
  className="hero min-h-screen "
  style={{
    backgroundImage: "url(https://i.pinimg.com/736x/6a/fc/fc/6afcfc4a87cb9c140e741c1c9aed68fa.jpg)",
  height: 380 }}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-neutral-content flex flex-wrap flex-col mb-16 ">
  <div className="max-w-md mx-auto bg-orange-200 px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
    fresh.flower.here
  </h1>
</div>
<div className="flex flex-wrap justify-center gap-4 p-4">
      {texts.map((item, index) => (
		<Link href={item.href} key={index}><button
		className="text-xl font-bold text-center text-white bg-orange-300 border-orange-200 h-[68px] px-6 py-2 border-4 hover:bg-white hover:text-orange-300 transition duration-300 ease-in-out"
	  >
		{item.text}
	  </button></Link>
      ))}
    </div>
  </div>
</div>

    {/* DailyProducts */}
    <section className="bg-white">
	<div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-4 lg:px-6 ">
    <div className='text-center m-8 font-extrabold text-4xl'>
    Event Planning
    <h1 className='px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 font-medium text-xl'>From weddings to corporate events, we provide stunning floral arrangements for any occasion.</h1>
    </div>

		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full justify-center xl:mx-[180px]">
			<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
				<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src="https://i.pinimg.com/474x/8e/6e/22/8e6e22b14dbc95009865b7204a1f3aa1.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Wines</h3>
				</a>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
				<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
					<img src="https://i.pinimg.com/474x/75/30/35/7530352b1521d594d4000a1e96839774.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Gin</h3>
				</a>
				<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
					<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://i.pinimg.com/564x/08/cf/c1/08cfc11b52219ca75e28540e27c89831.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Whiskey</h3>
					</a>
					<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://i.pinimg.com/474x/61/ad/b4/61adb45d1ec31c898916772cca9416af.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Vodka</h3>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

    {/* Services */}
    <section className="py-12 bg-white">
    <div className="container mx-auto text-center">
    <div className='text-center m-8 font-extrabold text-4xl'>
    Daily Flower Menu
    <h1 className='px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 font-medium text-xl'>Create the perfect bouquet tailored to your needs or arranged in a vase for pick up or local delivery in Bkk. </h1>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1  h-full justify-center xl:mx-[180px] mb-4">

			<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col p-4">
				<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
					<img src="https://i.pinimg.com/736x/fa/3b/d9/fa3bd90277591515e3595b37f696d56f.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Gin</h3>
				</a>
				<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
					<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://i.pinimg.com/474x/39/9e/c3/399ec3bc2f59c98763eaea28f49adab8.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Whiskey</h3>
					</a>
					<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://i.pinimg.com/736x/18/cf/d8/18cfd8f0e88bdf145082c103de65215b.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Vodka</h3>
					</a>
				</div>
			</div>
		</div>
    </div>
  </section>
  </>
  )
}

