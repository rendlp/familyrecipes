import React, { useState, useEffect } from 'react'
import useFormInput from '../hooks/useFormInput'
import { connect } from 'react-redux'
import IngredientItem from './IngredientItem.js';

const IngredientList = (props) => {
   
  const [values, changeForm, resetForm] = useFormInput({...props.formData})

  let manageIngredients = props.manageForm

  useEffect( () => {
    manageIngredients = props.manageForm
  }, [values])
       
  return (
        <div className="item">
         <ul> 
          {/* {this.props.inputs.map(item => (
            <IngredientItem {...item} />    
           ))}    */}
         </ul>
        </div>
  )
   
}

function mapStateToProps(appState) {
    return {
        inputs: appState.inputs
    }
}

export default connect(mapStateToProps)(IngredientList)