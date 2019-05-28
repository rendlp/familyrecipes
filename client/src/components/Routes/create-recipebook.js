import React, { useState, useContext } from 'react'
import { AuthContext } from "../../lib/auth"
import { createRecipebook } from '../../actions/actions'
import Header from '../header'
import Footer from '../footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CreateRecipebook = (props) => {

  const { user } = useContext(AuthContext)

  const [recipebookName, setRecipebookName] = useState('')
  const [recipebookError, setRecipebookError] = useState('')

  function handleSubmit(e) {
      // e.preventDefault()
      createRecipebook(user, recipebookName).then(() => {
          props.history.goBack()
      })
    }

    function validator(input) {
      input.preventDefault()
      let valid = true

      if (recipebookName == '') {
        valid = false
        setRecipebookError('Cannot Be Blank')
      } else {
        setRecipebookError('')
      }

      if (valid === true) {
        handleSubmit()
      }
    }

  return (
    <div className='createRecipeContainer'>
     <Header />

    <div className='divHeader2'>
    <Link to='/'><FontAwesomeIcon className='faBack' icon="arrow-left" /></Link>
    <div className='space'></div>
    <h1 className='recipe-name'>Create Book</h1>
    </div>
    <div className='createRecipeContainer'>
    <form className="create-" onSubmit={validator}>
    
     <label className='errorLabel'>{recipebookError}</label> 
     <div className='createGroupDiv'>
     <input 
       className='createGroupInput'
       placeholder="Name your recipebook"
       name="recipebookName"
       onChange={e => setRecipebookName(e.target.value)}
    />
   
      <button className='abutton' type="submit">Create Recipebook</button>
      </div>
    </form>
    </div>
      <Footer />
    </div>
  )



}

export default CreateRecipebook
