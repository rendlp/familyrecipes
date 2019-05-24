import React, { useState, useContext } from 'react'
import { AuthContext } from "../../lib/auth"
import { createGroup } from '../../actions/actions'
import Header from '../header'
import Footer from '../footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CreateGroup = props => {

    const { user } = useContext(AuthContext)

    const [groupName, setGroupName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        createGroup(groupName, user).then(() => {
            props.history.goBack()
        })

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
         
                <div className = "createGroup">
                <form className="createGroupForm" onSubmit={handleSubmit}>
              
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


                </form>



                </div>
          <Footer />
        </div>



    )
}

export default CreateGroup
