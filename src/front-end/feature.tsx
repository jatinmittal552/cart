import FeatureCard from "./FeatureCard";
import { TbTruckDelivery,TbDiscount } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";

const data = [
    {
        icon:<TbTruckDelivery className="text-4xl"/>,
        title:"Free Delivery",
        desc:"Applicable on all items",
    },
    {
        icon:<TbDiscount className="text-4xl"/>,
        title:"Disounts Available",
        desc:"Upto $50",
    },
    {
        icon:<MdSupportAgent className="text-4xl"/>,
        title:"Support 24/7",
        desc:"Contust us 24 hours a day",
    },
    {
        icon:<RiRefund2Fill className="text-4xl"/>,
        title:"Return & Refund",
        desc:"Money back guarantee",
    },
];

const Feature = ()=>{
    return (
        <div className="container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            
            {data.map((item)=>(
                <FeatureCard
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    desc={item.desc}
                />
            ))}
        </div>
    );
}

export default Feature;