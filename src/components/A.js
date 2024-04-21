import React from "react";
import classes from './A.module.css';
import TestContext from "./store/testContext";
// Option 1
const A = () => {
    return(
        <TestContext.Consumer>
            {(ctx) => {
                return <div className={classes.a}>
                    {ctx.name} - {ctx.age}
                </div>
            }

            }
        </TestContext.Consumer>

    );
};
export default A;
