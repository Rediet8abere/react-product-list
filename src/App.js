import React, { useState } from 'react';
import data, { categoriesUnique } from './data'
import './App.css';

categoriesUnique.push("All")
// console.log(categoriesUnique)

function CatagoryButton(props) {
  return (
      <button className={props.catButton === props.currCat ? "button-header-active"  : "button-header"}
        key={props.catButton} onClick={props.onClick}>
          {props.catButton}
      </button>
  )
  
}

function Products(props) {
  return (
    // make a component 
    <div key={props.product.id} className="products-header">
          <h1 className="block">{props.product.name}</h1>
          <h4 className="block">{props.product.price}</h4>
          <h4 className="block">{props.product.category}</h4>
        </div>
  );
}




function App() {
  const [currentCategory, setCategory] = useState("");

  return (
    <div className="App">
      <header className="App-header">
          {categoriesUnique.map((category) => {
              return <CatagoryButton catButton={category} currCat={currentCategory} onClick={() => setCategory(category)}/>
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
