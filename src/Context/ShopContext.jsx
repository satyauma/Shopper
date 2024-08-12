import React, { useState } from "react";
import { createContext } from "react";
import products from "../Components/Assert/products";


export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < products.length+1; index++) {
        cart[index]=0;
        
    }
    return cart;
}

const ShopContextProvider = (props) =>{
    const [cartItems,setCartItems] = useState(getDefaultCart())

    
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = products.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            
        }
        return totalAmount;

    }
    const getTotalCartItems = () =>{
        let totalitem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalitem+=cartItems[item]
            }
        }
        return totalitem
    }

    const contextValue = {getTotalCartItems,getTotalCartAmount,products,cartItems,addToCart,removeFromCart};
    

   

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;