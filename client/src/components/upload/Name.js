// import React, { Component } from 'react'

// class Name extends Component {

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
//         directionsClass:''
//     }

//     handleChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }
    
//     render() {
//         return (
   
//                   <div className="test">
//                    <label htmlFor='name' className={this.state.nameClass}>
//                     <h1>Name</h1> {this.state.nameError}
//                     </label>
//                     <input 
//                     className={this.state.nameClass}
//                     type="text" 
//                     ref="name"
//                     name="name" 
//                     id="name" 
//                     onChange= {this.handleChange} 
//                     value= {this.state.name} />
//             </div>
//         )
//     }
// }

// export default Name;