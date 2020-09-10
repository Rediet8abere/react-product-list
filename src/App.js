import React, { useState } from 'react';
import data, { categoriesUnique, categoriesWithCounts, categoriesNameAndCount } from './data'
import './App.css';

categoriesUnique.push("All")
console.log(categoriesUnique)
console.log(categoriesWithCounts)
console.log(categoriesNameAndCount)

function CatagoryButton(props) {
  if(props.catButton === "All") {
    var total = 0;
    for(const keys in categoriesWithCounts){
      total += categoriesWithCounts[keys];    
    }
    return (
      <button className={props.catButton === props.currCat ? "button-header-active"  : "button-header"}
        key={props.catButton} onClick={props.onClick}>
          {props.catButton}
    <sup>{total}</sup>
      </button>
  )
} else{
  return (
    <button className={props.catButton === props.currCat ? "button-header-active"  : "button-header"}
      key={props.catButton} onClick={props.onClick}>
        {props.catButton}
        <sup>{props.count}</sup>
    </button>
)
}
  

  
}

function Products(props) {
  return (
    <table>
      <tr key={props.product.id} >
        <td>{props.product.name}</td>
        <td >{props.product.price}</td>
        <td>{props.product.category}</td>
      </tr>
    </table>
  );
}




function App() {
  const [currentCategory, setCategory] = useState("");

  return (
    <div className="App">
      <header className="App-header">
          {categoriesUnique.map((category) => {
              return <CatagoryButton catButton={category} currCat={currentCategory} count={categoriesWithCounts[category]} onClick={() => setCategory(category)}/>
            })}
   

          {data.filter((item) => {    
             if (currentCategory === "All") {
              return item
             } else {
              return item.category === currentCategory || currentCategory === null         
             }
             
          }).map((obj)=> {
            return <Products product={obj}/>
          })}

      </header>
    </div>
  );
}

export default App;
