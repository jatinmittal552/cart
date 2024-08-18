
const Banner = () => {
  return (
    <div className="bg-slate-200 mt-4">
        <div className="grid md:grid-cols-2 py-8">
            <div className="flex items-center justify-evenly">
                <div className="max-w-[450px] space-y-4">
                    <p className="text-black">
                        Starting at <span className="font-bold">$400.00</span>
                    </p>
                    <h1 className="text-black font-bold text-4xl md:text-5xl">
                        The best note book collection 2023
                    </h1>
                    <h3 className="text-2xl font-['Oregano',cursive]">
                        Exclusive sale ends soon grap up upto <span className="text-red-600">30% off</span> this week 
                    </h3> 
                    <a href="#" className="inline-block bg-white rounded-md px-6 py-3 hover:bg-gray-400 hover:text-white" >Shop now</a>
                </div>
            </div>
            <div className="flex justify-evenly">
                <img src="images.jpg" alt="img" className="" />
            </div>
        </div>
    </div>
  )
}

export default Banner