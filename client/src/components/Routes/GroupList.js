import React, { useEffect, useContext} from 'react'
import { useSelector } from 'react-redux'
import { AuthContext } from "../../lib/auth"
import { getGroups } from '../../actions/actions'
import {Link} from 'react-router-dom'

const GroupList = props => {

    const { user } = useContext(AuthContext)

    useEffect(() => {
<<<<<<< HEAD
        getGroups(user)
    },[user])
=======
       getGroups(user)
    },[])
>>>>>>> 6fa22fce838533a78d260d54e7221db2aba56fca

        const groups = useSelector(appstate => appstate.groups)

    return (
        // <Provider store={store}>
        //     <Router>
                <div className = "groupList">
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
        //     {/* </Router>
        // </Provider> */}


    )
}

export default GroupList
