// import React, { Component } from 'react'

// class Directions extends Component {

//     state = {
//         name:'',
//         nameError:'',
//         nameClass:'',
//         ingredients:'',
//         ingredientsError:'',
//         ingredientsClass:'',
//         prepHours:'',
//         prepMinutes: '',
//         prepError:'',
//         prepClass:'',
//         directions:'',
//         directionsError:'',
//         directionsClass:'',
//         input: ''
//     }

//     handleChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }
    
//     render() {
//         return (
//             <div className="directionDiv">
//             <label htmlFor='name' className={this.state.directionsClass}>
//                <h1>Directions</h1> {this.state.directionsError}
//             </label>
//               <textarea 
//               className={this.state.directionsClass}
//               type="text" 
//               ref="recipes_directions"
//               name="directions" 
//               id="directions" 
//               onChange= {this.handleChange} 
//               value= {this.state.directions} />
//               </div>
           
//         )
//     }
// }

// export default Directions;