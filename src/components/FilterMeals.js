import React from "react";
import classes from './FilterMeals.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const FilterMeals = () => {
    return(
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input 
                className={classes.SearchInput}
                type="text" 
                placeholder={'Please enter key words'}/>
                <FontAwesomeIcon
                    className={classes.SearchIcon} 
                    icon={faSearch}/>
            </div>
            
        </div>

    )
};
export default FilterMeals;