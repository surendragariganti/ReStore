
import { useState, useEffect } from "react";
import { Product } from "../../app/models/product"
import ProductList from "./ProoductList";


export default function Catalog() {
    const [Products, setProducts] = useState<Product[]>([]);
    useEffect(()=>{
      fetch('http://localhost:5000/api/Products')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    return (
        <>
       <ProductList Products = {Products}/>
        </>
    )
}