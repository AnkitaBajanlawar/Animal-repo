import React from 'react'

const AnimalApp2 = () => {
  const handleClick=()=>{
    console.log('button was clicked');
  }
  return (
    <div>
      <h1>AnimalApp2</h1>
      <button onClick={handleClick}>Add Animal</button>
    </div>
  )
}

export default AnimalApp2
