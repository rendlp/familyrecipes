import React, { useEffect, useContext } from 'react'
import { AuthContext } from "../../lib/auth"
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { getGroupUsers, getGroupRecipes } from '../../actions/actions'

const Group = props => {

    const { user } = useContext(AuthContext)

    const group_id = props.match.params.group_id

    useEffect(() => {
        getGroupUsers(group_id)
        getGroupRecipes(group_id)
    },[])

    const groupUsers = useSelector(appstate => appstate.groupUsers)
    const currentGroup = useSelector(appstate => appstate.currentGroup)
    const groupRecipes = useSelector(appstate => appstate.groupRecipes)

    console.log(groupRecipes)

    return (
                <div className = "groupUserList">
                    <Link to='/'><button className='backBtn'>Back</button></Link>
                    <h1>{currentGroup}</h1>
                    <h3>{currentGroup} members:</h3>
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
                        <Link to={`/group/${group_id}/inviteUser`}>
                                <p>Invite a user</p>
                        </Link>
                    </div>
                    <h3>{currentGroup} recipes:</h3>
                    <ul>
                    {groupRecipes.map((recipe, i) => (
                            <li key={`recipe - `+i}>
                                <Link to={`/${currentGroup}/Recipes/` + recipe.recipe_id}>
                                    <p>
                                        {recipe.name}
                                    </p>
                                </Link>   
                            </li>
                        ))}
                    </ul>

                </div>


    )
}

export default Group