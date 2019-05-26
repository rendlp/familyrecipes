import React, { useState, useContext } from 'react'
import { AuthContext } from "../../lib/auth"
import { createRecipebook } from '../../actions/actions'
import Header from '../header'
import Footer from '../footer'



const CreateRecipebook = (props) => {

  const { user } = useContext(AuthContext)

  const [recipebookName, setRecipebookName] = useState('')
  const [groupInputError, setGroupInputError] = useState('')

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
        setGroupInputError('Cannot Be Blank')
      } else {
        setGroupInputError('')
      }

      if (valid === true) {
        handleSubmit()
      }
    }

  return (
    <div>
      <Header />
      <form className="create-" onSubmit={validator}>
        <label>{groupInputError}</label>
        <input placeholder="Name your recipebook"
              name="recipebookName"
              onChange={e => setRecipebookName(e.target.value)}
        />
        <button className='abutton' type="submit">Create Recipebook</button>
      </form>
      <Footer />
    </div>
  )



}

export default CreateRecipebook
