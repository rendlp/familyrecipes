import React, { useEffect, useContext } from 'react'
import { AuthContext } from "../lib/auth"
import {getRecipeBooks} from '../actions/actions'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RecipeBookListAccountHome= (props) => {

    const { user } = useContext(AuthContext)

    useEffect( () => {
        getRecipeBooks(user)  
    }, [])

    const userRecipeBooks = useSelector(appstate => appstate.userRecipeBooks)

    return (
        <div className='booksList'>
    
            {userRecipeBooks.map((recipebook, i) => (

               <Link 
               to={`/user_fav_recipes/recipebook/` + recipebook.recipebook_id}>
                   <div className="book"key={'recipebook' + i}>

                    <div className='bookCenter'>
                    <h2>
                        {recipebook.recipebook_name}
                    </h2>
                    <FontAwesomeIcon className='fa2' icon='book-open' />
                    </div>
    
                </div>
                </Link>
            ))}    
     </div>
    )
}



export default RecipeBookListAccountHome