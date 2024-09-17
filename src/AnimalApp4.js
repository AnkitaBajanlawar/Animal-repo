import React, {useState} from 'react'

function getRandomAnimal(){
  const animals=['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  let randomNum= Math.random();
  console.log('randomNum' +randomNum);
  let index =[Math.floor(randomNum * animals.length)];
  console.log('index'+index);
  let animalName=animals[index];
  return animalName;
}

const AnimalApp4 = () => {
  const[animals,setAnimals]=useState([]);
  const handleClick=(event)=>{
    let selectedAnimal=getRandomAnimal();
    console.log('selected Animal'+selectedAnimal);
    setAnimals([...animals, selectedAnimal]);
  }
  return (
    <div>
      <h1>AnimalApp4</h1>
      <div>
        <button onClick={handleClick}>Add Animal</button>
      </div>
      <h1>{animals}</h1>
    </div>
  )
}

export default AnimalApp4
