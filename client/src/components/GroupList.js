import React, { useEffect, useContext } from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { AuthContext } from "../lib/auth"
import { getGroups } from '../actions/actions'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'



const GroupList = props => {
    
    const { user } = useContext(AuthContext)

    console.log('GroupList - ' + user)

   

    useEffect(() => {
        getGroups(user)
    },[])
    
    //  const groups = useSelector(appstate => appstate.groups[0])

    // console.log(groups)
    return (
        <div className = "groupList">
        {console.log('in component',props.groups)}
            <ul>
                {props.groups.map((item, i) => (
                    <li>{item.groupname}</li>
                ))}
            </ul>
            <Menu>
                {props.groups.map((group, i) => (
                    <MenuItem key={"group" + i}>
                        {group}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

function mapStateToProps(appState) {
    console.log('appstate',appState.groups[0])
    return{
        groups: appState.groups
    }
}
export default connect(mapStateToProps)(GroupList)