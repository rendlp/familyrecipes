import React, { Component } from 'react'
import { connect } from 'react-redux'
import IngredientItem from './IngredientItem.js';

class IngredientList extends Component {
   render() {
       return (
        <div className="item">
         <ul> 
          {this.props.inputs.map(item => (
            <IngredientItem {...item} />    
           ))}   
         </ul>
        </div>
      )
   }
}

function mapStateToProps(appState) {
    return {
        inputs: appState.inputs
    }
}

export default connect(mapStateToProps)(IngredientList)