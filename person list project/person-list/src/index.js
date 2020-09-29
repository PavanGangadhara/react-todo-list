import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Person = ({img, name, job, children}) => {
  // console.log(props)
  return(
    <article className='person'>
      <img src={`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`} alt="person"/>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  )
}

const PersonList = () => {
  return <section className='person-list'>
    <Person img='34' name='John' job='developer'/>
    <Person img='22' name='Bob' job='designer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aliquid?</Person>
    <Person img='56' name='David' job='artist'/>
  </section>
}



ReactDOM.render(<PersonList />,document.getElementById('root')
);
