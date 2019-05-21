import React, { useEffect, useContext } from 'react'
import { AuthContext } from "../lib/auth"
import {getRecipeBooks} from '../actions/actions'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'



const RecipeBookListAccountHome= (props) => {

    const { user } = useContext(AuthContext)

    useEffect( () => {
        getRecipeBooks(user)  
    }, [])


    const userRecipeBooks = useSelector(appstate => appstate.userRecipeBooks)

    return (
        <div className="book">
            {userRecipeBooks.map((recipebook, i) => (
                <div key={'recipebook' + i}>
                <Link 
                        to={`/user_fav_recipes/recipebook/` + recipebook.recipebook_id}>
                    <h1>
                        {recipebook.recipebook_name}
                    </h1>
                </Link>
                </div>
            ))}
        </div>
    )
}



export default RecipeBookListAccountHome