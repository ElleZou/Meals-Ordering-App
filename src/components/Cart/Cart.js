import React, { useContext } from "react";
import classes from './Cart.module.css';
import iconImg from '../../asset/bag.png';
import CartContext from "../store/cart-context";
import CartDetails from "./CartDetails";

const Cart = () => {
    const ctx = useContext(CartContext);
    return(
        
        <div className={classes.Cart}>
            <CartDetails/>
            <div className={classes.Icon}>
                <img src={iconImg}/>
                {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}
            </div>

            {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>No items in cart</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}
           
            <button className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disabled : ''}`}>Check Out</button>
        
        </div>
        
    );
};
export default Cart;