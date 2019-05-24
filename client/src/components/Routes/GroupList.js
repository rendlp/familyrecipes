import React, { useEffect, useContext} from 'react'
import { AuthContext } from "../../lib/auth"
import { getGroups } from '../../actions/actions'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const GroupList = props => {

    const { user } = useContext(AuthContext)

    useEffect(() => {
       getGroups(user)
    },[user])

        const groups = useSelector(appstate => appstate.groups)

    return (
        <div className='wrapper'>
        <div className="left-panel">
        <h1 className='recipe-name'>Groups</h1>

        <Link to="/user_recipes"><p className="leftP">Recipes</p></Link>
        <Link to="/"><p className="leftP">Books</p></Link>
        <Link to="/user_fav_recipes"><p className="leftP">Favorites</p></Link>
        {/* <Link to="user_messages"><p className="leftP">My Messages</p></Link> */}
        {/* <Link to="/user_profile"><p className="leftP">My Profile</p></Link> */}
        <div className='space2'></div>
        <Link to={"/creategroup"}><button className='abutton'>Create a group</button></Link>
      </div>     

        <div className='groupContainer'>
        <div className = "groupList"> 
            <div className='groupUL'>
                
            {groups.map((item, i) => (

                <Link to={"/group/"+item.group_id}>
                <div className='groupLI-div'>
                 <div className='groupLI' key={`group - `+i}> 
                  <h2>{item.groupname}</h2>  
                 </div>
                </div>  
                 </Link>                      
                ))}
            </div>
          
            
        </div>
     </div>
    </div>
    )
}

export default GroupList
