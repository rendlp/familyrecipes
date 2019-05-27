import React, { useEffect, useContext} from 'react'
import { AuthContext } from "../../lib/auth"
import { getGroups } from '../../actions/actions'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GroupList = props => {

    const { user } = useContext(AuthContext)

    useEffect(() => {
       getGroups(user)
    },[user])



        const groups = useSelector(appstate => appstate.groups)

    return (
        <div className='wrapper'>

         <div className="left-panel">
          <h1 className='title'>Groups</h1>
           <Link to="/"><p className="leftP">Books</p></Link>
           <Link to="/user_recipes"><p className="leftP">Recipes</p></Link>
           <Link to="/user_fav_recipes"><p className="leftP">Favorites</p></Link>
           <div className='space2'></div>
           <Link to={"/creategroup"}><button className='abutton'>Create Group</button></Link>
         </div>     

        <div className='groupContainer'>
        <div className = "groupList"> 
    
        <div className='groupUL'>
                
        {groups.map((item, i) => (

            <Link to={"/group/"+item.group_id}>
                <div className='groupLI-div' key={`group - `+i}> 
                <div className='bookCenter'>
                     
                <h2>{item.groupname}</h2>  
                <FontAwesomeIcon icon='user-friends' className='fa2' />

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

export default GroupList;
