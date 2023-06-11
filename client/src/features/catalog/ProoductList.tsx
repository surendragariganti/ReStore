import { Grid} from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";
import { useAppSelector } from "../../app/store/configureStore";
import ProductCardSkeleton from "./ProductCardSkeleton";
interface Props {
    Products: Product[]
}

export default function ProductList(props:Props) {
    const {productsLoaded} = useAppSelector(state => state.catalog)
    return (
        <Grid container spacing={4}>
        {props.Products.map(product => (
            <Grid item key={product.id} xs= {4}>
                {!productsLoaded ? <ProductCardSkeleton/> : <ProductCard  product = {product}/>}
                 
            </Grid>
       
        ))}
     </Grid>
    )
}