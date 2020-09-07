import React, { useState } from 'react';
import data, { categoriesUnique } from './data'
import './App.css';

categoriesUnique.push("All")
console.log(categoriesUnique)

function Products(props) {
  console.log("props: ", props)
  return (
    
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
              return <button className="button-header" key={category} onClick={() => setCategory(category)}>
                {category}
                </button>
            })}
   

          {data.filter((item) => { 
             console.log(currentCategory)    
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
