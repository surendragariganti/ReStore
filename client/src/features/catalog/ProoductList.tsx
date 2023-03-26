import { Grid} from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";
interface Props {
    Products: Product[]
}

export default function ProductList(props:Props) {
    return (
        <Grid container spacing={4}>
        {props.Products.map(product => (
            <Grid item key={product.id} xs= {3}>
                 <ProductCard  product = {product}/>
            </Grid>
       
        ))}
     </Grid>
    )
}