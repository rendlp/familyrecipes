import React, { useState, useContext } from 'react'
import { AuthContext } from "../../lib/auth"
import { createGroup } from '../../actions/actions'
import Header from '../header'
import Footer from '../footer'


const CreateGroup = props => {

  const [groupName, setGroupName] = useState('')
  const [inputError, setInputError] = useState('')

    const { user } = useContext(AuthContext)


    function handleSubmit(e) {
        e.preventDefault()

        createGroup(groupName, user).then(() => {
            props.history.goBack()
        })
    }

    function validator(input) {
      input.preventDefault()
      let valid = true

      if (groupName == '') {
        valid = false
        setInputError('Group Name Cannot Be Blank')
      }

      if (valid == true) {
        handleSubmit()
      }
    }

    return (
      <div>
        <Header />
                <div className = "createGroup">
                <form className="create-" onSubmit={validator}>
                <label>{inputError}</label>
                    <input
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


                </form>



                </div>
          <Footer />
        </div>



    )
}

export default CreateGroup
