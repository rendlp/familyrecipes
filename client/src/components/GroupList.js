import React, { useEffect, useContext } from 'react'
import { AuthContext } from "../lib/auth"
import { getGroups } from '../actions/actions'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from '../store'



const GroupList = props => {
    
    const { user } = useContext(AuthContext)
   

    useEffect(() => {
        getGroups(user)
    },[])
    
     const groups = useSelector(appstate => appstate.groups)

    return (
        // <Provider store={store}>
        //     <Router>
                <div className = "groupList">
                    <ul>
                        {groups.map((item, i) => (
                            <li>{item.groupname}</li>
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