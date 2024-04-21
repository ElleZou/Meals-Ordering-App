import React from "react";
import classes from './Filter.module.css';

const FilterMeals = () => {
    return(
        <div className={classes.FilterMeals}>
            <input type="text" placeholder={'Please enter key words'}/>
        </div>

    )
};
export default FilterMeals;