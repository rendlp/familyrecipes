import React, { useState, useEffect } from 'react'
import { searchUser, getGroupUsers, addUserToGroup } from '../../actions/actions'
import {connect} from 'react-redux'
import Header from '../header'
import Footer from '../footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const InviteUser = props => {

    const [userNameSearched, setUserName] = useState('')

    const group_id = props.match.params.group_id

    useEffect(() => {
        searchUser('')
        getGroupUsers(group_id)
    }, [group_id])


    function handleSubmit(e) {
        e.preventDefault()

        searchUser(userNameSearched)
        setUserName('')

    }

    function handleAddUser (e){
        e.preventDefault()

        addUserToGroup(group_id, props.userFound).then(() => {
            props.history.goBack()
        })
        console.log(group_id, props.userFound)
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
          <h1 className='recipe-name'>Invite User</h1>
        </div>

        <div className = "inviteUser">
         <div className='hidden2'>
          <p className={props.userFound === '' ? "hidden" : props.userFound === 'usernotfound' ? 'hidden': "userFoundDisplay"}>User found: {props.userFound}</p>
          <button onClick={handleAddUser} className={props.userFound === '' ? "hidden" : props.userFound === 'usernotfound' ? 'hidden': 'abutton3'}>Add {props.userFound} to {props.currentGroup}</button>
          <p className={props.userFound === 'usernotfound' ? 'userNotFoundDisplay' : 'hidden'}>User not found</p>
        </div>

          <form className="create-" onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              type="text"
              name="searchUser"
              id="groupName"
              placeholder="Search a username..."
              onChange={e => setUserName(e.target.value)}
              value={userNameSearched}
            />
            
            <button className='abutton3' type="submit">
                Search
            </button>
            
            </form>
          </div>
        <Footer />
      </div>
    )
}

function mapStateToProps(appState){
    console.log('currentGroup - ',appState.currentGroup)
    return{
        userFound: appState.foundUser,
        currentGroup: appState.currentGroup
    }
}

export default connect(mapStateToProps)(InviteUser)
