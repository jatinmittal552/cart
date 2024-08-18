"use client"
import React from 'react'
import { removeCart } from '@/redux/features/cardSlicer'
import { useDispatch } from 'react-redux'
import { RxCross1 } from 'react-icons/rx'
import toast from 'react-hot-toast'
interface propsType{
    id:number,
    image:string,
    name:string,
    price:number,
    quantity:number
}
const SideCard = ({id,image,name,price,quantity}:propsType)=> {
    const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
            <img src={image} alt="img" className="h-[80px]" />
            <div className="space-y-2">
                <h3 className="font-medium">{name}</h3>
                <p className="text-gray-400 text-[14px">
                    {quantity} x ${price}.00
                </p> 
            </div>
        </div>
        <RxCross1 className="cursor-pointer"
            onClick={()=>{
                dispatch(removeCart(id)) 
                toast.error("Remove from Cart")
            }}/>
    </div>
  );
};

export default SideCard