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
        <div className='booksList'>
            {userRecipeBooks.map((recipebook, i) => (
                <div className="book"key={'recipebook' + i}>
                <Link 
                        to={`/user_fav_recipes/recipebook/` + recipebook.recipebook_id}>
                    <h2>
                        {recipebook.recipebook_name}
                    </h2>
                </Link>
                </div>
            ))}
        </div>
    )
}



export default RecipeBookListAccountHome