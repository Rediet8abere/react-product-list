// import React from 'react';

import data from './data.json'

// make a list of all of the categories contained in the data
const catagories = data.map((dict) => {
  return dict.category
})

// console.log(catagories)


const allCategories = catagories
const categoryObjects = allCategories.reduce((obj, cat) => {
  obj[cat] = 0
  return obj
}, {}) 

const categoriesUnique = Object.keys(categoryObjects).sort()
// console.log(categoriesUnique)


const categoriesWithCounts = data.reduce((obj, cat) => {
  // check if cat exists as a key on obj
  // console.log(cat)
  if (cat.category in obj) {
    obj[cat.category] += 1
  } else {
    obj[cat.category] = 1
  }
  return obj
}, {}) // !!! Be sure to define the initial value as an Object!
// console.log(categoriesWithCounts)



const categoriesNameAndCount = data.reduce((acc, cat) => {
  // console.log(cat)
  acc.push({name:cat.name, count:categoriesWithCounts[cat.category]})
  return acc
  
}, []) // !!! Be sure to define the initial value as an Object!

// console.log(categoriesNameAndCount)

export default data 
export { categoriesUnique, categoriesWithCounts, categoriesNameAndCount }


// export default class Catagories extends React.Component {
//   constructor(props) {
//     super(props);
//     this.collectCatagories = this.collectCatagories.bind(this);
//     this.uniqueCatagories = this.uniqueCatagories.bind(this);
//     this.nameAndCount = this.nameAndCount.bind(this)
// }


//   collectCatagories() {
//     const catagories = data.map((dict) => {
//       return dict.category
//     })
//     return catagories
//   }

//   uniqueCatagories() {
//     const categories = this.collectCatagories()
//     const categoryObjects = categories.reduce((obj, cat) => {
//       obj[cat] = 0
//       return obj
//     }, {}) 

//     const categoriesUnique = Object.keys(categoryObjects)
//     return categoriesUnique  
//   }

//   countCatagories() {
//     const categoriesWithCounts = data.reduce((obj, cat) => {
//       // check if cat exists as a key on obj
//       // console.log(cat)
//       if (cat.category in obj) {
//         obj[cat.category] += 1
//       } else {
//         obj[cat.category] = 1
//       }
//       return obj
//     }, {}) // !!! Be sure to define the initial value as an Object!
//     console.log(categoriesWithCounts)
//     return  categoriesWithCounts
//   }

//   nameAndCount() {
    
//     const categoriesWithCounts = this.countCatagories()
//     const categoriesNameAndCount = data.reduce((acc, cat) => {
//       // console.log(cat)
//       acc.push({name:cat.name, count:categoriesWithCounts[cat.category]})
//       return acc
      
//     }, []) // !!! Be sure to define the initial value as an Object!
    
//     console.log(categoriesNameAndCount)
    
//     return  categoriesNameAndCount
    
//   }
  
  
//   render() {
//     return(
//       <div>
//         <h1>Hello</h1>
//         <button onClick={this.collectCatagories}>
//           Show Catagories
//         </button>
//         <button onClick={this.uniqueCatagories}>
//           Unique Catagories
//         </button>
//         <button onClick={this.countCatagories}>
//           Count Catagories
//         </button>
//         <button onClick={this.nameAndCount}>
//           name Count
//         </button>
//       </div> 
//     ) 
//   }
// }







// export default data // export the native JS array