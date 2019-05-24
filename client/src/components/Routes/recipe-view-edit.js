import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../header'
import Footer from '../footer'
import  { Link } from 'react-router-dom'
import Logout from "../auth/Logout"
import { storage } from '../firebase'

const RecipeViewEdit = props => {

const recipeId = props.match.params.recipe_id

return (
    <h1>recipe edit</h1>
)


}

export default RecipeViewEdit