import React, { useContext } from "react";
import classes from './A.module.css';
import TestContext from "./store/testContext";

/*Option 2
Use Context
   Step1: Import Context
   Step2: Use hook function useContext() to get context
            useContext() needs a Context as its parameter
            useContext() it will obtain the data in the context and return it as a return value


xxx.Provider
    Represents the producer of data, which can be used to specify the data in the Context
    Use value to specify the data stored in the Context

    

When we access data through Context, it will read the data in the Provider closest to it
    
*/
const B = () => {
    //use hook function to get Context
    const ctx = useContext(TestContext);
    return(
        <div className={classes.a}>
            {ctx.name} -- {ctx.age}
            
        </div>

    );
};
export default B;