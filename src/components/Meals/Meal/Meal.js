import React from "react";
import classes from './Meal.module.css';
import Counter from "../../UI/Counter/Counter";

const Meal = () => {
    return(
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src="/img/meals/1.jpeg"/>
            </div>
            <div>
                <h2 className={classes.Title}>Burger</h2>
                <p className={classes.Desc}>100% pure beef paired with crisp, tangy cucumbers, onion bits, and delicious tomato sauce offers a classic flavor that's irresistible!</p>
                <div className={classes.PriceWrap}>
                    <span className={classes.Price}>6.5</span>
                    <Counter amount={2}/>
                </div>
            </div>

        </div>

    );
};
export default Meal;