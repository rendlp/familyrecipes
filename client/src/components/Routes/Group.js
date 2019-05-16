import React, { useEffect, useContext } from 'react'
import { AuthContext } from "../../lib/auth"
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { getGroupUsers } from '../../actions/actions'

const Group = props => {

    const { user } = useContext(AuthContext)

    console.log(props.match.params.group_id)

    useEffect(() => {
        getGroupUsers(props.match.params.group_id)
    },[])

    const groupUsers = useSelector(appstate => appstate.groupUsers)
    const currentGroup = useSelector(appstate => appstate.currentGroup)

    console.log(groupUsers)
    console.log(currentGroup)

    return (
                <div className = "groupUserList">
                <h1>{currentGroup}</h1>
                    <ul>
                    {groupUsers.map((user, i) => (
                            <li key={`user - `+i}>
                                <Link to={"/userProfile/"+user.username}>
                            <span>{user.username}</span>
                                </Link>   
                            </li>
                        ))}
                    </ul>
                    <div id="inviteUserLink">
                        <Link to={"/inviteUser"}>
                                <p>Invite a user</p>
                        </Link>
                    </div>
                </div>


    )
}

export default Group