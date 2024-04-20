import React from 'react';
import classes from './Counter.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; //Import components
import  {faPlus,faMinus} from '@fortawesome/free-solid-svg-icons';// Improt icons
//Counter components
const Counter = (props) => {
    const addButtonHandler = () => {
        props.onAdd(props.meal);
    };
    const subButtonHandler = () => {
        props.onSub(props.meal);
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