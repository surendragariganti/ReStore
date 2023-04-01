
import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product"
import ProductList from "./ProoductList";


export default function Catalog() {
    const [Products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        agent.catalog.list()
            .then(products=>setProducts(products))
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
    },[])
    
    if(loading) return <LoadingComponent message="Loading Products..."/>
    return (
        <>
       <ProductList Products = {Products}/>
        </>
    )
}