import React from 'react';
import classes from './Counter.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; //Import components
import  {faPlus,faMinus} from '@fortawesome/free-solid-svg-icons';// Improt icons
//Counter components
const Counter = (props) => {
    return(
        <div className={classes.Counter}>

            {
                (props.amount && props.amount !== 0) ? (
                    <>
                        <button className={classes.Sub}><FontAwesomeIcon icon={faMinus}/></button>
                        <span className={classes.count}>{props.amount}</span>
                    </>
                ) : null
            }
    
            <button className={classes.Add}>
                <FontAwesomeIcon icon={faPlus}/> {/* Use the components */}
            </button>
             
        </div>

    );
};
export default Counter;