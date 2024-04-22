import React from 'react';
import Meals from './components/Meals/Meals'; 
import { useState } from 'react';
import CartContext from './components/store/cart-context';
import FilterMeals from './components/FilterMeals';

//simulate a set of data
const MEALS_DATA=[
  {
    id:'1',
    title:'Spicy Chicken Steak Burger',
    desc:"100% pure beef paired with crisp, tangy cucumbers, onion bits, and delicious tomato sauce offers a classic flavor that's irresistible!",
    price:6.5,
    img:'/img/meals/1.jpeg'

  },
  {
    id:'2',
    title:'Cod Burger',
    desc:'A delicious and healthy seafood option, featuring freshly selected cod as its main ingredient.',
    price:5.5,
    img:'/img/meals/2.jpeg'

  },
  {
    id:'3',
    title:'Cheese Beef Burger',
    desc:'Cheese Beef Burger features a thick, juicy beef patty perfectly seasoned and grilled to smoky perfection. ',
    price:6,
    img:'/img/meals/3.jpeg'

  },
  {
    id:'4',
    title:'Teriyaki Chicken Thigh Burger',
    desc:'Indulge in the hearty flavors of our Grilled Chicken Leg Burger, featuring a succulent and perfectly char-grilled chicken leg. ',
    price:5.5,
    img:'/img/meals/4.jpeg'

  },
  {
    id:'5',
    title:'Bacon Cheese Beef Burger',
    desc:'Indulge in our Bacon Cheese Beef Burger, a mouthwatering creation crafted for the ultimate burger enthusiast. ',
    price:7.5,
    img:'/img/meals/5.jpeg'

  },
  {
    id:'6',
    title:'Veggie Beef Burger',
    desc:'This burger features a juicy, premium beef patty, topped with crisp, fresh vegetables including lettuce, tomato, and onions. ',
    price:6,
    img:'/img/meals/6.jpeg'

  },
  {
    id:'7',
    title:'Double cod cheeseburger',
    desc:'This deluxe burger features two flaky, perfectly seasoned cod fillets, layered between melted slices of rich cheese. ',
    price:8,
    img:'/img/meals/7.jpeg'

  },
]


const App = () => {
  //Create a state to store the food list
  const [mealsData,setMealsData]=useState(MEALS_DATA);
  
  //Create a state to store the shopping cart data
  const[cartData,setCartData]=useState({
    items:[],
    totalAmount:0,
    totalPrice:0
  });

  //Add items to cart
  const addItem= (meal) => {
    const newCart = {...cartData};
    //Determine whether the product is contained in the shopping cart
    if(newCart.items.indexOf(meal) === -1){
      //Add meal to cart
      newCart.items.push(meal);
      meal.amount = 1;
    }else{
      //Increase the quantity of goods
      meal.amount += 1;
    };
    //Increase total amount
      newCart.totalAmount += 1;
    //Increase total price
      newCart.totalPrice += meal.price;
    
    //Reset shopping cart
      setCartData(newCart);
  };
  //Reduce the number of items
  const removeItem = (meal) => {
    //Copy shopping cart
    const newCart = {...cartData};

    //Reduce the number of items
    meal.amount -= 1;
    
    //Check whether the product quantity is 0, if it is 0, remove the product
    if(meal.amout === 0){
      newCart.items.splice(newCart.items.indexOf(meal),1)
    }
    
    //Modify the total number of items and total amount
    meal.totalAmount -= 1;
    meal.totalPrice -= meal.price;

    setCartData(newCart);

  };
  //Create a function that filters meals
  const filterHandler = (keyword) => {
    const newMealsData = MEALS_DATA.filter(item => item.title.indexOf(keyword) !== -1);
    setMealsData(newMealsData);

  };

  return(
    <CartContext.Provider value={{...cartData,addItem,removeItem}}>
   
      <div>
        {/*When we access data through Context, it will read the data in the Provider closest to it*/}
        <FilterMeals onFilter={filterHandler}/>
        <Meals 
            mealsData={mealsData}
        />
      </div>
    </CartContext.Provider>
  );
};
export default App;
