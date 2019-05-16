import React, { useState, useEffect } from 'react'
import { searchUser } from '../../actions/actions'
import { useSelector } from 'react-redux'

const InviteUser = props => {

    const [userNameSearched, setUserName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        searchUser(userNameSearched)
        console.log(userNameSearched)

    }

    const userFound = useSelector(appstate => appstate.userFound)

    console.log(userFound)

    return (
                <div className = "inviteUser">
                    <h1>Invite a user to this group</h1>
                    <form id="searchUser" onSubmit={handleSubmit}>
                        <input
                            autoComplete="off"
                            type="text"
                            name="searchUser"
                            id="groupName"
                            placeholder="Search a username..."
                            onChange={e => setUserName(e.target.value)}
                        />
                        <button type="submit">
                            Search
                        </button>
                    </form>
                    <p>{userFound}</p>
                </div>
    )
}

export default InviteUser
