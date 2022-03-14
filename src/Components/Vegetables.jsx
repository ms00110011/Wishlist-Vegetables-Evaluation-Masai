import React,{useState} from 'react'
import styles from "./Vegetables.module.css"

export const Vegetables = () => {

    const [tom,setTom] = React.useState(10)
    const [pot,setPot] = React.useState(8)
    const [car,setCar] = React.useState(5)
    const [oni,setOni] = React.useState(7)

    const Increment = (val) => {
        if(val==="tom") {
            setTom(tom+1)
        }
        else if(val==="pot") {
            setPot(pot+1)
        }
        else if(val==="car") {
            setCar(car+1)
        }
        else {
            setOni(oni+1)
        }
    }


    const Decrement = (val) => {
        if(val==="tom") {
            setTom(tom-1)
        }
        else if(val==="pot") {
            setPot(pot-1)
        }
        else if(val==="car") {
            setCar(car-1)
        }
        else {
            setOni(oni-1)
        }
    }



  return (
      <>
    <div className={styles.root}>
        `<h1>tomatoes  : {tom}</h1>`
        <button onClick={()=>Increment("tom")}>+</button>
        <button onClick={()=>Decrement("tom")}>-</button>
    </div>
    <div>
        `<h1>potatoes  : {pot}</h1>`
        <button onClick={()=>Increment("pot")}>+</button>
        <button onClick={()=>Decrement("pot")}>-</button>
    </div>
    <div>
        `<h1>carrots  : {car}</h1>`
        <button onClick={()=>Increment("car")}>+</button>
        <button onClick={()=>Decrement("car")}>-</button>
    </div>
    <div>
        `<h1>onions  : {oni}</h1>`
        <button onClick={()=>Increment("oni")}>+</button>
        <button onClick={()=>Decrement("oni")}>-</button>
    </div>
      </>
  )
}
