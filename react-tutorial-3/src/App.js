import React from 'react';
import logo from './logo.svg';
import './App.css';
// import PropTypes from 'prop-types'

// const Person = ({person:{img, name, age, info}}) => {
//   return(
//     <article>
//       <img src={img} alt="person"/>
//       <h4>name: {name}</h4>
//       <h4>age: {age}</h4>
//       <h4>info: {info || 'def. info'}</h4>
//     </article>
//   )
// }

// Person.propTypes = {
//   person: PropTypes.shape({
//      img: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number,
//   info: PropTypes.string.isRequired
//   })
 
// }

// Person.defaultProps = {
//   // info: 'default info'
//   // below doesn't work though
//   person:{
//     info:'def. info'  
//   }
// }

// class PersonList extends React.Component{

//   state={
//     people:[
//       {
//         id:1,
//         img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
//         name:'John',
//         age: 24
//       },
//       {
//         id:2,
//         img: "https://randomuser.me/api/portraits/thumb/men/76.jpg",
//         name:'Bob',
//         age: 2,
//         info:'some info about Bob'
//       },

//     ]
//   }

//   render(){
//     return(
//      <section>
//        {
//          this.state.people.map(person => <Person key={person.id} person={person}/>)
//        }
//      </section>
//     )
//   }
// }

class Form extends React.Component{


  state={
    firstName: '',
    lastName: '',
    people: []
  }
  
  handleChange = (event) => {
    // console.log(event.target)
    // console.log(event.target.name)
    // console.log(event.target.value)

    // if(event.target.name === 'firstName'){
    //   const textValue = event.target.value;
    //   this.setState({
    //     firstName: textValue
    //   })
    // }

    this.setState({
      [event.target.name]: [event.target.value]
    })
  }
  

  handleSubmit = e =>{
    e.preventDefault();
    const firstName = this.state.firstName
    const lastName = this.state.lastName
    console.log(firstName,lastName)

    if(firstName.length>0 && lastName.length>0){
      const person = ` ${firstName} ${lastName} `
      this.setState({
        people: [...this.state.people, person],
        firstName: '',
        lastName: ''
      })
    }

    
  }

  render(){
    return(
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
            <button>Submit</button>
          </form>
        </article>
        <article>
          <h1>People</h1>
          <div>
            {this.state.people}
          </div>
        </article>
      </section>
    )
  }
}

function App() {
  return (
    // <PersonList />
    <Form />
  );
}

export default App;
