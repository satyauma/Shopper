import React from "react";
import './RelatedProducts.css'
import data_product from '../Components/Assert/data.js'
import Item from "../Components/items/Item";

const RelatedProducts = () =>{
    return(
        <div className="relatedproducts">
            <h1>Relate Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>

        </div>
    )
}
export default RelatedProducts;