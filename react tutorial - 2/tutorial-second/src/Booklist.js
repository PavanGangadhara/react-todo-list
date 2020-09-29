import React, { Component } from 'react'
import Book from './Book'
import BookData from './Bookdata'
import Button from './Buttons'

export default class Booklist extends Component {

    constructor(props){
        super(props)
        this.state={
            books : BookData
        }
    }

    handleDelete = id =>{
        const sortedList = this.state.books.filter(item => item.id !== id)
        this.setState({
            books: sortedList
        })
        
    }

    // state = {
        
    // }
    // this.setState({})
   
    render() {

        // const books = this.state.books.map((item) => item.book)
        // console.log(books)
        // filter
        // map
        // forEach
        // reduce
        return (
            <section>
                <h3>This is our Booklist</h3>
                {
                    this.state.books.map((item) => <Book key={item.id} info={item} 
                    handleDelete={this.handleDelete}/>)
                }
            </section>
        )
    }
}
