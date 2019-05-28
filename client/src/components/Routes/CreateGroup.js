import React, { useState, useContext } from 'react'
import { AuthContext } from "../../lib/auth"
import { createGroup } from '../../actions/actions'
import Header from '../header'
import Footer from '../footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CreateGroup = props => {

  const [groupName, setGroupName] = useState('')
  const [inputError, setInputError] = useState('')

    const { user } = useContext(AuthContext)


    function handleSubmit(e) {
        createGroup(groupName, user).then(() => {
            props.history.goBack()
        })
    }

    function validator(input) {
      input.preventDefault()
      let valid = true

      if (groupName == '') {
        valid = false
        setInputError('Cannot Be Blank')
      }

      if (valid == true) {
        handleSubmit()
      }
    }

    return (
      <div>
        <Header />
        <div className='divHeader'>
        <Link
            to='/user_groups'>
             <FontAwesomeIcon className='faBack' icon="arrow-left" />
            </Link>
            <div className='space'></div>
            <h1 className='recipe-name'>Create Group</h1>
            </div>

                <div className = "createRecipeContainer">
                <form className="create-" onSubmit={validator}>
                <label className='errorLabel2'>{inputError}</label>
          <div className='createGroupDiv'>
                    <input
                        className='createGroupInput'
                        autoComplete="off"
                        type="text"
                        id="groupName"
                        name="groupName"
                        placeholder="Enter a group name..."
                        onChange={e => setGroupName(e.target.value)}

                    />
                    <button

                    type="submit"
                    className='abutton'>
                        Create group
                    </button>
                    </div>

                </form>



                </div>
          <Footer />
        </div>



    )
}

export default CreateGroup
