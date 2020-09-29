import React, {Component} from 'react'
import './App.css'



// import {name, age, person, secretValue} from './data'

// const App = () => (
//   <section>
//     <p>This is my content</p>
//     <p>{name}</p>
//     <p>{age}</p>
//     <p>{person.name}</p>
//   </section>
// );



// const App = () => (
//   <section>
//     <Banner />
//     <p>This is my content</p>
//     <p>{data.name}</p>
//     <p>{data.age}</p>
//     <p>{data.person.name}</p>
//   </section>
// );
import Booklist from './Booklist'

class App extends Component {

  

  render(){
    return(
        <section>
    
    {/* <p>This is my content</p>
    <p>{data.name}</p>
    <p>{data.age}</p>
    <p>{data.person.name}</p> */}

    <h1>This is our application</h1>
    <Booklist />
  </section> 
    )
  }
}

export default App;