import React, { useState, useEffect } from 'react'
import { searchUser, getGroupUsers, addUserToGroup } from '../../actions/actions'
import {connect} from 'react-redux'
import Header from '../header'
import Footer from '../footer'

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
        <div className = "inviteUser">
          <h1>Add a user to {props.currentGroup}</h1>
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
            <button type="submit">
                Search
            </button>
            </form>
              <p className={props.userFound === '' ? "hidden" : props.userFound === 'usernotfound' ? 'hidden': "userFoundDisplay"}>User found: {props.userFound}</p>
              <button onClick={handleAddUser} className={props.userFound === '' ? "hidden" : props.userFound === 'usernotfound' ? 'hidden': "userFoundDisplay"}>Add {props.userFound} to {props.currentGroup}</button>
              <p className={props.userFound === 'usernotfound' ? 'userNotFoundDisplay' : 'hidden'}>User not found</p>
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
