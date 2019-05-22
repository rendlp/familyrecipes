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
        <Link to="/user_recipes"><p className="leftP">My Recipes</p></Link>
        <Link to="/user_groups"><p className="leftP">My Groups</p></Link>
        <Link to="/user_fav_recipes"><p className="leftP">Favorites</p></Link>
        {/* <Link to="user_messages"><p className="leftP">My Messages</p></Link> */}
        
        {/* <Link to="/user_profile"><p className="leftP">My Profile</p></Link> */}
       
      </div>
        

        <div className='groupContainer'>
          
            
                <div className = "groupList">
                      
                    <div className='groupUL'>
                    {groups.map((item, i) => (
                        <div className='groupLI-div'>
                          <div className='groupLI' key={`group - `+i}>
                                <Link to={"/group/"+item.group_id}>
                            <h2>{item.groupname}</h2>
                                </Link>
                            </div>
                            
                            </div>  
                            
                      ))}
                    </div>
                    <Link to='/'><button className='backBtn'>Back</button></Link>
                      <Link to={"/creategroup"}><button>Create a group</button></Link>
                </div>
            </div>
            </div>
    )
}

export default GroupList
