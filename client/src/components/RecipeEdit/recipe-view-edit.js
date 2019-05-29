import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../header'
import Footer from '../footer'
import  { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { AuthContext } from "../../lib/auth"
import { getCurrentUserOwnedRecipe, editRecipe, editRecipeInGroupLinks, editRecipeInUserFavorites, editRecipeInUserRecipebooksLinks } from '../../actions/actions'
import { storage } from '../firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import nettles from '../assets/nettle.jpg'


const RecipeViewEdit = props => {

    const recipeId = props.match.params.recipe_id
    const { user } = useContext(AuthContext)

    // console.log(recipeId)

    useEffect(() => {
        getCurrentUserOwnedRecipe(recipeId, user, props.history)
    },[])

    const currentRecipe = useSelector(appstate => appstate.currentRecipe)
    const currentRecipeIngredients = useSelector(appstate => appstate.currentRecipeIngredients)

    // console.log(currentRecipe)
    // console.log(currentRecipeIngredients)

    const [name, changeName] = useState(currentRecipe.name)
    const [prepHours, changePrepHours] = useState(currentRecipe.prepHours)
    const [prepMinutes, changePrepMinutes] = useState(currentRecipe.prepMinutes)
    const [servings, changeServings] = useState(currentRecipe.servings)
    const [ingredients, changeIngredients] = useState(currentRecipeIngredients)
    const [directions, changeDirections] = useState(currentRecipe.directions)

    const [image, setImage] = useState(currentRecipe.imgURL)
    const [url, setUrl] = useState(currentRecipe.imgURL)
    const [progress, setProgress] = useState(0)

    // console.log(ingredients)


    function handleEnter(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            e.persist();
            changeIngredients(ingredients => {
                let newIngredients = ingredients.concat(e.target.value)
                ingredients = newIngredients
                e.target.value=''
                return newIngredients
            })
        }
        // console.log(ingredients)
    }

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleUpload = e => {
        e.preventDefault()
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on('state_changed',

        // PROGRESS
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress)
        },

        // ERROR
        (err) => {
         console.log(err)
        },

        // GET IMAGE AFTER UPLOAD COMPLETION
        () => {
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                setImage(url)
                setUrl(url)
            })
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        editRecipe(name, prepHours, prepMinutes, servings, directions, ingredients, url, recipeId)
        editRecipeInGroupLinks(name, url, recipeId)
        editRecipeInUserFavorites(name, url, recipeId)
        editRecipeInUserRecipebooksLinks(name, url, recipeId)
        // console.log(name, prepHours, prepMinutes, servings, directions, ingredients, url)
        props.history.goBack()
    }

    return (
        <div>
        <Header />
         <div className="canvas">
         <div className="uploadDiv">

         <Link to='/'><FontAwesomeIcon className='faBack' icon="arrow-left" /></Link>

          <form className='editForm' onSubmit={handleSubmit}>
              
            <div className="column1">
            <h1>Name</h1>
                <input
                type="text"
                name="name"
                className="formInput"
                onChange= {e => changeName(e.target.value)}
                value=  {name}
                />
           

            <div>
             <label htmlFor='name' className="prep-label" />
             <div className="selectorDiv">

            {/* HOURS */}
            <select
             type="text"
             name="prepHours"
             className="formInput"
             onChange= {e => changePrepHours(e.target.value)}  >

                <option value={prepHours}>{prepHours} Hours</option>
                <option value='0' >None</option>
                <option value='1'>1 Hour</option>
                <option value='2'>2 Hours</option>
                <option value='3'>3 Hours</option>
                <option value='4'>4 Hours</option>
                <option value='5'>5 Hours</option>
                <option value='6'>6 Hours</option>
                <option value='7'>7 Hours</option>
                <option value='8'>8 Hours</option>
                <option value='9'>9 Hours</option>
                <option value='10'>10 Hours</option>
                <option value='11'>11 Hours</option>
                <option value='12'>12 Hours</option>
            </select>

            {/* MINUTES */}
            <select
             type="text"
             name="prepMinutes"
             className="formInput"
             onChange= {e => changePrepMinutes(e.target.value)}
            >

                <option value={prepMinutes}>{prepMinutes} Minutes</option>
                <option value="0">None</option>
                <option value="5">5 Minutes</option>
                <option value="10">10 Minutes</option>
                <option value="15">15 Minutes</option>
                <option value="20">20 Minutes</option>
                <option value="25">25 Minutes</option>
                <option value="30">30 Minutes</option>
                <option value="35">35 Minutes</option>
                <option value="40">40 Minutes</option>
                <option value="45">45 Minutes</option>
                <option value="50">50 Minutes</option>
                <option value="55">55 Minutes</option>
            </select>

            {/* SERVINGS */}
                <select
                 className="formInput"
                 type='text'
                 name='serves'
                 onChange={e => changeServings(e.target.value)} >

                    <option value={servings}>Serves: {servings}</option>
                    <option value="1">1 Serving</option>
                    <option value="2">2 Servings</option>
                    <option value="3">3 Servings</option>
                    <option value="4">4 Servings</option>
                    <option value="5">5 Servings</option>
                    <option value="6">6 Servings</option>
                    <option value="7">7 Servings</option>
                    <option value="8">8 Servings</option>
                </select>
             </div>
            </div>

            <div className="ingredients">
              <h1 className=''>Ingredients</h1>
                <input className="inputClass" type="text" name="list" placeholder="2 cups of flour..." onKeyDown={handleEnter} />
                    <ul className='ingredientUL'>
                        {ingredients.map((item,i) => {
                            return <li className='ingredientLI' key={'ingredient'+i}>{item}</li>
                        })}
                    </ul>
            </div>
            </div>

            <div className="text-directions">
                <div className="directionDiv">
                        <h1>Directions</h1>
                        <textarea
                            type="text"
                            name="directions"
                            onChange= {e => changeDirections(e.target.value)}
                            value={directions}
                        />
                </div>
            </div>
            
           <div className='image-upload'>
           <h1>Image</h1>
            <div className ='imgUploadDiv'>
                
                <progress className='progress' value={progress} max='100' />
                <input className='uploadInput' type='file' onChange={handleChange}   />
                <input type="hidden" name="image" value={image} />
                <img name="image" src={typeof image === 'string' ? image : nettles } className='imgUpload' alt='' value={url}  />
                <button className='abutton' onClick={handleUpload}>Upload</button>
            </div>
            </div>
            
            <button className='abutton' type="submit">Edit Recipe</button>
        </form>
        </div>
    <Footer />
  
</div>
</div>
    )
}

export default withRouter(RecipeViewEdit)