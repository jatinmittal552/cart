import React, { Dispatch, SetStateAction, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { RxCross1 } from 'react-icons/rx'
import SideCard from './SideCard'
interface PropsType{
    setShowCart:Dispatch<SetStateAction<boolean>>
}
const SideCart = ({setShowCart}:PropsType) => {
    const products = useSelector((state:RootState)=>state.cartReducer.items)
    const getTotal=()=>{
        let total = 0;
        products.forEach((item)=>total=total+item.price*item.quantity)
        return total;
    }
  return (
    <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll">
        <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
            <RxCross1
                className="absolute right-0 top-1 m-6 text-[24px] cursor-pointer"
                onClick={()=>{setShowCart(false)}}
            />
            <h3 className="pt-2 text-lg font-bold text-gray-600 uppercase">
                your cart
            </h3>
            <div className="mt-6 space-y-2">
                {products.map((item)=>(
                    <SideCard
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                    />
                ))}
            </div>
            <div className="flex justify-between items-center font-medium text-xl py-4">
                <p>Total:</p>
                <p>${getTotal()}.00</p>
            </div>
            <button className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-blue-300 mb-4 mt-4">
                View Cart
            </button>
            <button className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-blue-300 mb-4">
                CheckOut
            </button>
        </div> 
    </div>
  )
}

export default SideCart
