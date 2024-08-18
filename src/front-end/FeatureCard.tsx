interface propsType{
    icon : React.ReactNode;
    title:string,
    desc:string,
}

const FeatureCard= ({icon,title,desc}:propsType) =>{
    return(
        <div className="flex gap-2 justify-evenly rounded-xl bg-gray-400 px-4 py-5  my-3 mt-[-12px]">
            {icon}
            <div>
                <h2 className="font-medium text-x1">{title}</h2>
                <p className="text-gray-200">{desc}</p>
            </div>

        </div>
    );
}
export default FeatureCard;