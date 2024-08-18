import React, { useEffect } from 'react'
import { AiFillStar,AiOutlineStar,AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/features/cardSlicer'
import { makeToast } from '@/utilis/helper'
interface IProduct{
    id:number,
    img:string,
    name:string,
    category:string,
    price:number,
    reviews:number
}
const ProductCard = ({id,img,name,price,category,reviews}:IProduct) => {
    const dispatch = useDispatch();
    const addProduct = ()=>{
        const payload ={
            id,image:img,name,price,quantity:1
        }
        dispatch(addToCart(payload));
        makeToast("Added To Cart")
    }
    
  return (
    <div className="border border-gray-200 rounded-md">
        <div className="text-center border-b border-gray-200 ">
            <img src={img} alt="img" className="inline-block w-[300px] h-[300px] object-cove" />
        </div>
        <div className="px-8 py-4">
            <p className="text-gray-500 text-[14px] font-medium">{category}</p>
            <h2 className="font-medium min-h-12">{name}</h2>
            <div className="mt-3 flex text-yellow-400 items-center">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/> 
                <p className="text-gray-400 text-[14px] ml-2" >{reviews} Review</p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <h2 className="font-medium text-red-400 text-xl mr-2">${price}</h2>
                <div className="flex gap-1  items-center rounded-full bg-blue-400 text-white px-3 py-3 cursor-pointer hover:bg-blue-600" onClick={addProduct}>
                    <AiOutlineShoppingCart size={24}/>
                </div>
            </div>
             
        </div>
    </div> 
  )
}

export default ProductCard