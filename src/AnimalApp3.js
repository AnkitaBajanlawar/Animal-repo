import React, {useState}from 'react'

const AnimalApp3 = () => {
  const [count, setCount] =useState(0);
  const handleClick=(event)=>{
        setCount(count+1);//here i get the latest value of count
        // setCount(count+1);//here I don't
        // setCount(count+1);//here I don't
        //if you pass an arrow function to the set method,
        //React will pass the latest value of the state variable to the arrow function
        //as an argument
        //you should use this technique, if the change you want to make depends on the previous value
        //of the state variable
        //  setCount((current)=> ++current);
        //  setCount((current) => ++current);
        // setCount((current) => ++current);
    console.log('button was clicked');
    alert('button was clicked');
  }
  return (
    <div>
      <h1>Animal App3</h1>
      <button onClick={handleClick}>Add Animal</button>
      <div><h2>Number of Animals Created {count}</h2></div>
    </div>
  )
}

export default AnimalApp3
