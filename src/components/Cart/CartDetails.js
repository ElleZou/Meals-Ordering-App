import React from "react";
import Backdrop from "../UI/Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from './CartDetails.module.css';

const CartDetails = () => {
    return(
        <Backdrop>
            <div className={classes.CartDetails}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>Meal Details</h2>
                    <div className={classes.Clear}>
                        <FontAwesomeIcon icon={faTrash}/>
                        <span>Clear</span>
                    </div>
                </header>

            </div>


        </Backdrop>
    );
};
export default CartDetails;