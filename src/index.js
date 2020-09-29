import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'

// stateless functional component
// always return JSX


// const firstName = 'John'
// const lastName = 'Doe'

// function Books(){
//   const btn = 'search'

//   return (
//     <section className='books'>
//       <button>{btn}</button>
//       {/* <h2>{firstName + " " + lastName}</h2> */}
//       <h2>{`${firstName} ${lastName}`}</h2>
//       {/* <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book /> */}
//     </section>

//   );
// }

// const Book = () => {
//   return <article className='book'>
//     <CoverImage />
//     <Title />
//       <Author />
//   </article>
// }

// const CoverImage = () => <img src="data:image/webp;base64,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" alt=""/>

// const Title = () => <h1 style={{fontSize:'2rem', color:'red'}}>Gita</h1>

// const authorStyle = {
//   letterSpacing: '10px',
//   color: 'green'
// }

// const Author = () => <p style={authorStyle}>by Devdatt Pattnaik</p>

// three arguments, element, propsObject, children
// function Greeting(){
//   return React.createElement('div', {}, 'HelloWorld')
// }

const friends = [
  {name:'John Doe', job:'developer'},
  {name: 'Bob Doe', job: 'designer'},
  {name: 'Sassy Doe', job: 'artisit', age:26}
]

function People(){
  return(
    <section>
      <Person person={friends[0]}>Some info</Person>
      <Person person={friends[1]}/>
      <Person person={friends[2]}/>
      


    </section>
  )
}

const Person = (props) => {

  const {name, job, age} = props.person
  const {children} = props

  return(
    <article>
      <h2>{name}</h2>
      <p>{job}</p>
      <p>{age}</p>
      {children}
      <hr/>
    </article>
  )
}

ReactDOM.render(<People />, document.getElementById('root'))