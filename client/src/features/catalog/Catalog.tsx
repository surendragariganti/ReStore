
import {useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
// import { Product } from "../../app/models/product"
import ProductList from "./ProoductList";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";


export default function Catalog() {
    
    const Products = useAppSelector(productSelectors.selectAll);
    const {productsLoaded, status} = useAppSelector((state)=> state.catalog)
    const dispatch = useAppDispatch();
    useEffect(()=>{
       if(!productsLoaded) dispatch(fetchProductsAsync())
    },[dispatch, productsLoaded])
    
    if(status.includes('pending')) return <LoadingComponent message="Loading Products..."/>
    return (
        <>
       <ProductList Products = {Products}/>
        </>
    )
}