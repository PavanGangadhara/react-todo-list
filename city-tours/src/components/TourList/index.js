import React from 'react'
import Tour from '../Tour'
import './tourlist.scss'
import {tourData} from '../../tourData'

export default class TourList extends React.Component {
    state={
        tours: tourData
    }
   
   removeTour = id =>{
       console.log(this.state.tours)
       const sortedList = this.state.tours.filter(tour => tour.id !== id)
       console.log(sortedList)
       this.setState({
           tours: sortedList
       })
   }
   
    render(){
        console.log(this.state.tours)
        const {tours} = this.state
        return (
            <section className="tourlist">
                {
                    tours.map(tour => (<Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>))
                }
            </section>
        )
    }
   
}
