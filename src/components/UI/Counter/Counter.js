import React, { useContext } from 'react';
import classes from './Counter.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; //Import components
import  {faPlus,faMinus} from '@fortawesome/free-solid-svg-icons';// Improt icons
import CartContext from '../../store/cart-context';
//Counter components
const Counter = (props) => {
    //Use hook function to get CartContext
    const ctx = useContext(CartContext);

    const addButtonHandler = () => {
        ctx.addItem(props.meal);
    };
    const subButtonHandler = () => {
        ctx.removeItem(props.meal);
    }
    return(
        <div className={classes.Counter}>

            {
                (props.meal.amount && props.meal.amount !== 0) ? (
                    <>
                        <button onClick={subButtonHandler} className={classes.Sub}><FontAwesomeIcon icon={faMinus}/></button>
                        <span className={classes.count}>{props.meal.amount}</span>
                    </>
                ) : null
            }
    
            <button onClick={addButtonHandler} className={classes.Add}>
                <FontAwesomeIcon icon={faPlus}/> {/* Use the components */}
            </button>
             
        </div>

    );
};
export default Counter;