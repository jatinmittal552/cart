"use client"
import { useEffect,useState } from 'react'
import FeatureCard from './FeatureCard'
import axios from 'axios'
import React from 'react'
import ProductCard from './ProductCard'

interface iProduct{
    id:number,
    images:string[],
    title:string,
    category:string,
    price:number
    reviews: {
        rating: number;
        comment: string;
        date: string;
        reviewerName: string;
        reviewerEmail: string;
    }[];
}
const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=10")
          .then((res) => res.json())
          .then((data) => setProducts(data.products))
          .then(console.log);
      }, []);
    
  return (
    <div className="container mt-10">
        <div className="sm:flex justify-between items-center mx-[100px]">
            <h2 className="text-4xl font-medium">Products</h2>
            <div className="text-gray-400 flex gap-4 text-xl mt-4 sm:mt-0">
                <div>New</div>
                <div>Featured</div>
                <div>Top Sellers</div>
            </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {products.map((item:iProduct)=>(
                <ProductCard
                    key={item.id}
                    id={item.id}
                    img={item.images[0]}
                    name={item.title}
                    price={item.price}
                    category={item.category}
                    reviews={item.reviews.length}
                />
            ))}
        </div>

    </div>
  )
}

export default Products