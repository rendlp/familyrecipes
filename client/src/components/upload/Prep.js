import React, { Component } from 'react'

class Prep extends Component {

    state = {
        prepHours:'',
        prepMinutes: '',
        prepError:'',
        prepClass:'',
        servings: ''
      
    }

    render() {
        return (
            <form>
            <div className="prep">
            <label htmlFor='name' className={this.state.prepClass} />
             <div className="selectorDiv">

{/* HOURS */}
                <select 
                className={this.state.prepClass}
                type="text" 
                name="prepHours" 
                id="prepHours" 
                onChange= {this.handleChange}  >

                <option>Hours?</option>
                <option value='0' >0 Hours</option>
                <option value='1'>1 Hour</option>
                <option value='2'>2 Hours</option>
                <option value='3'>3 Hours</option>
                <option value='4'>4 Hours</option>
                <option value='5'>5 Hours</option>
                <option value='6'>6 Hours</option>
                <option value='7'>7 Hours</option>
                <option value='8'>8 Hours</option>
                <option value='9'>9 Hours</option>
                <option value='10'>10 Hours</option>
                <option value='11'>11 Hours</option>
                <option value='12'>12 Hours</option>
                </select>

{/* MINUTES */}
                <select 
                className={this.state.prepMClass}
                type="text" 
                name="prepMinutes" 
                id="prepMinutes" 
                onChange= {this.handleChange} >
                
                <option>Minutes?</option>
                <option value="0">0 Minutes</option>
                <option value="5">5 Minutes</option>
                <option value="10">10 Minutes</option>
                <option value="15">15 Minutes</option>
                <option value="20">20 Minutes</option>
                <option value="25">25 Minutes</option>
                <option value="30">30 Minutes</option>
                <option value="35">35 Minutes</option>
                <option value="40">40 Minutes</option>
                <option value="45">45 Minutes</option>
                <option value="50">50 Minutes</option>
                <option value="55">55 Minutes</option>      
                </select>

{/* SERVINGS */}
                <select
                className=''
                type='text'
                name='serves'
                id='serves'
                onChange={this.handleChange} >

                <option>How many servings?</option>
                <option value="1">1 Serving</option>
                <option value="2">2 Servings</option>
                <option value="3">3 Servings</option>
                <option value="4">4 Servings</option>
                <option value="5">5 Servings</option>
                <option value="6">6 Servings</option>
                <option value="7">7 Servings</option>
                <option value="8">8 Servings</option>
                
                </select>
                </div>
            </div>
        </form>
        )
    }
}

export default Prep;

