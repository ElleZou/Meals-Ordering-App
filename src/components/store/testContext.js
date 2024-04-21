/*Context is equivalent to a public storage space
    Data that needs to be accessed in multiple components can be stored in a Context
    In this way, you can access these data without passing props layer by layer.
    Create Context by React.createContext()
*/
import React from 'react';

const TestContext = React.createContext({
    name:'',
    age:18
});
export default TestContext;