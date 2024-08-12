import React, { useContext } from "react";
import './CartItems.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assert/remove.png'

const CartItems = () =>{
    const {getTotalCartAmount,products,cartItems,removeFromCart} =useContext(ShopContext)
    return(
        <div className="cartitems">
            <div className = "cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {products.map((e)=>{
                if(cartItems[e.id]>0){
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className="carticon-producticon"/>
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className="cartitems-quantity">{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img  className="cartitems-removeitems" src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                </div>
                }
                return null;

            })}
            <div className="cartitem-dowm">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                
                <div className="cartitems-totalitems">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-totalitems">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-totalitems">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>


            
                <button>PROCCED TO CHECKOUT</button>
                </div>
                </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code,Enter it here</p>
                <div className="cartitem-promo-box">
                    <input type="text" placeholder="promo code"/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default CartItems;