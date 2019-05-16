import React, { Component } from 'react'

class Directions extends Component {

    state = {
        directions:'',
        directionsError:'',
        directionsClass:'',
   
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <form>
            <div className="directionDiv">
            <label 
            htmlFor='name' 
            className={this.state.directionsClass}>
             <h1>Directions</h1> 
            </label>

              <textarea 
              className={this.state.directionsClass}
              type="text" 
              ref="recipes_directions"
              name="directions" 
              id="directions" 
              onChange= {this.handleChange} 
              value= {this.state.directions} />
              </div>
              </form>
        )
    }
}

export default Directions;