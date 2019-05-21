import React, { useEffect, useContext} from 'react'
import { AuthContext } from "../../lib/auth"
import { getGroups } from '../../actions/actions'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const GroupList = props => {

    const { user } = useContext(AuthContext)

    useEffect(() => {
       getGroups(user)
    },[])

        const groups = useSelector(appstate => appstate.groups)

    return (
                <div className = "groupList">
                      <button><Link to='/'>Back</Link></button>
                    <ul>
                    {groups.map((item, i) => (
                            <li key={`group - `+i}>
                                <Link to={"/group/"+item.group_id}>
                            <span>{item.groupname}</span>
                                </Link>
                            </li>
                      ))}
                    </ul>
                    <div id="createGroupLink">
                        <Link to={"/creategroup"}>
                                <p>Create a group</p>
                        </Link>
                    </div>
                </div>
    )
}

export default GroupList
