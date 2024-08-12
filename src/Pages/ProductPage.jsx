import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import {useParams} from 'react-router-dom'
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import '../Pages/CSS/ProductPage.css';
import RelatedProducts from "../RelatedProducts/RelatedProducts";

const ProductPage = () =>{
    const {products} = useContext(ShopContext);
    const {productId} = useParams();
    const product = products.find((e)=>e.id === Number(productId))
    return(
        <div className="productpage">
            <Breadcrums product={product}/>
            <ProductDisplay product={product}/>
            <RelatedProducts/>

        </div>
    )
}
export default ProductPage;