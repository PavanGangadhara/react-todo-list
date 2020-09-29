import React, { Component } from 'react'
import './App.css'
import Button from './Buttons'

export default class Book extends Component {


    constructor(props){
        super(props)
        this.state =  {
            count: 1,
            showInfo: true
        }
        // this.handleClick = this.handleClick.bind(this)
      
    }

    // handleClick(){
    //     console.log('clicked');
    //     console.log(this.state.count)
        
    // }

    // handleClick = () => {
    //     console.log('clicked')
    //     console.log(this.state.count)
    // }

    // addCount = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }
    // lowerCount = () => {
    //     this.setState({
    //         count: this.state.count - 1
    //     })
    // }
    // resetCount = () => {
    //     this.setState({
    //         count: 0
    //     })
    // }

    handleInfo = () =>{
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        console.log(this.props)
        const {id,img,title, author} = this.props.info
        const {handleDelete} = this.props

        const checkInfo = info => {
            if(info){
                return(
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, debitis?</p>
                );

            }
            else{
                return null;
            }
        }
        return (
            <article className='book'>
                <img src={img} width='150' alt=""/>
                <div>

                <h3>Book:{title}</h3>
                <h5>Author:{author}</h5>
                <h1>Count:{this.state.count}</h1>
                {/* <button onClick={this.addCount}>Add count</button>
                <button onClick={this.resetCount}>Reset</button>  
                <button onClick={this.lowerCount}>Lower count</button>   */}
                {/* <Button handleDelete={handleDelete}/> */}
                {/* <button onClick = {() => handleDelete(id)}>delete me</button> */}

                {/* and */}

                {/* {
                    this.state.showInfo && <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe laborum atque soluta quis nemo quidem culpa repellat obcaecati velit aperiam.
                    </p>
                } */}

                {/* ternary operator */}

                {/* {
                    this.state.showInfo? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, excepturi!</p>: null
                } */}

                {
                    checkInfo(this.state.showInfo)
                }

                <button onClick={this.handleInfo}>toggle info</button>

                 
                </div>
            </article>
        )
    }
}
