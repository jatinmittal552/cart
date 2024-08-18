"use client"
import React, { Dispatch, SetStateAction } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'

interface PropsType{
    setShowCart:Dispatch<SetStateAction<boolean>>
}
const NavBar = ({setShowCart}:PropsType) => {

    const cartCount = useSelector((state:RootState)=>state.cartReducer.items.reduce((total,item)=>total+item.quantity,0))
  return (
     <div className="pt-4 bg-gray-400 top-0 sticky">
        <div className="container">
            <div className="flex justify-between items-center pb-5">
                <div className="text-4xl font-bold pl-9">Logo</div>
                <div className="lg:flex hidden w-full max-w-[550px]">
                    <input className="border-2 border-blue-400 py-1 px-2 w-full text-[20px]" type="text" placeholder='Search for products...'/>
                    <div className="bg-blue-400 text-[25] text-white place-items-center px-2 grid "><BsSearch/></div>
                </div>

                <div onClick={()=>setShowCart(true)}>
                    <div className="text-gray-500 text-[35px] relative cursor-pointer pr-9" ><AiOutlineShoppingCart/></div>
                    <div className="absolute top-[14px] right-[31px] bg-red-700 w-[20px] h-[20px] rounded-full text-white text-[8px] grid place-items-center">
                        {cartCount}
                    </div>
                </div>
            </div>

        </div>

     </div>
  )
}

export default NavBar