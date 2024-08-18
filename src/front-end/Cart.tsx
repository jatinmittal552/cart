import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart,updateQuantity } from '@/redux/features/cardSlicer'
import { RootState } from '@/redux/store'
const Cart:React.FC = () => {
    const products = useSelector((state:RootState)=>state.cartReducer.items);
    const dispatch = useDispatch();

    const getTotal = () =>
        products.reduce((total,item)=>total+item.quantity*item.price,0);
    
  return (
    <div className="bg-black w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll">
        <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6" >
            <h3 className="pt-6 text-lg font-medium text-gray-500 uppercase" >Your Cart</h3>
            {products.length===0
            ?(<div className="text-lg font-medium place-items-center">Your Cart is Empty</div>)
            :(
            <div>
                {products.map((item)=>(
                    <div key={item.id} className="mb-3 flex items-center justify-between">
                        <div className="flex items-center">
                            <img src="" alt="img" className="h-18 w-18 object-cover"/>
                            <div className="ml-5">
                                <div className="font-bold text-lg">{item.name}</div>
                                <p className="text-gray-400">
                                    ${item.price.toFixed(2)}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input className="w-16 border rounded p-1" 
                                type="number" 
                                min={1} 
                                value={item.quantity}  
                                onChange={(e)=>{
                                    dispatch(updateQuantity({id:item.id,quantity:parseInt(e.target.value)}))     
                                }}
                            />
                            <button className="ml-4 text-red-500" onClick={()=>dispatch(removeCart(item.id))}>Remove</button>
                        </div>
                    </div>
                ))}

            </div>
            )}
            <div className="mt-5 text-right">
                <strong>Total : ${getTotal().toFixed(2)}</strong>
            </div>
        </div>
    </div>
  );
}

export default Cart