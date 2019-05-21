import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from "../../lib/auth"
import Header from '../header'
import Footer from '../footer'
import { getCurrentRecipe, getGroups, shareRecipeWithGroup, addFavoriteRecipe } from '../../actions/actions'
import { connect, useSelector } from 'react-redux'
import GroupList from './GroupList';

const FavRecipeView = (props) => {
  

}

export default FavRecipeView
