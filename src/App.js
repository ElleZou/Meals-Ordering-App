import React from 'react';
import Meals from './components/Meals/Meals'; 
import { useState } from 'react';
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


  return(
    <div>
      <Meals mealsData={mealsData}/>
    </div>
  )
}
export default App;
