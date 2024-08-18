import React from 'react'

const Banner2 = () => {
  return (
    <div className='container mt-7 grid place-content-center '>
        <div className="grid md:grid-cols-[100%,55%] gap-3 pr-10 place-content-center ">
            <div className="h-[200px] md:h-[260px] bg-gray-300 grid place-content-center rounded-xl  ">
                    <p className="text-topHeadingSecondary text-xl font-medium">
                        20% off on all products
                    </p>
                    <h2 className="text-topHeadingPrimary font-medium text-xl sm:text-3xl max-w-[240px]">
                        Iphone 15 Pro Max 2024 <br/> <span className="font-light text-xl">$500/-</span> 
                    </h2>
                    <a href="#" className="max-w-[180px] mt-3 hover:bg-gray-400 rounded-md px-6 py-3 hover:text-white bg-white text-topHeadingSecondary font-medium">
                        Shop Now
                    </a>
            </div>
            <div className="flex justify-evenly rounded-xl bg-gray-200  max-h-[260px] max-w-[300px]">
                <img src="i.jpg" alt="img" className="p-1 max-h-full max-w-full object-fill" />
            </div>
        </div>

    </div>
  )
}

export default Banner2