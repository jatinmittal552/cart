import React from 'react'

const Banner2 = () => {
  return (
    <div className='container mt-7'>
        <div className="grid lg:grid-cols-[66%,35%] gap-3 pr-10 mx-[100px] ">
            <div className="h-[200px] md:h-[260px] bg-gray-300 flex items-center justify-evenly rounded-xl mr-[20px] ">
                <div className="max-w-[450px] ">

                    <p className="text-topHeadingSecondary text-xl font-medium">
                        20% off on all products
                    </p>
                    <h2 className="text-topHeadingPrimary font-medium text-xl sm:text-3xl max-w-[240px]">
                        Iphone 15 Pro Max 2024 <br/> <span className="font-light text-xl">$500/-</span> 
                    </h2>
                    <a href="#" className="inline-block mt-3 hover:bg-gray-400 rounded-md px-6 py-3 hover:text-white bg-white text-topHeadingSecondary font-medium">
                        Shop Now
                    </a>
                </div>
            </div>
            <div className="flex justify-evenly rounded-xl bg-gray-200  max-h-[260px] ">
                <img src="i.jpg" alt="img" className="p-1 max-h-full max-w-full object-fill" />
            </div>
        </div>

    </div>
  )
}

export default Banner2