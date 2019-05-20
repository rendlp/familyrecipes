import store from '../store'
import Axios from 'axios'
import { checkPropTypes, string } from 'prop-types'
import * as firebase from 'firebase'

export function addBoth(both) {
    Axios.post('/api/both', both)
}

export function getGroups(user) {
    Axios.get(`/api/groups?username=${user}`).then(resp => {
        store.dispatch({
            type: 'GET_GROUPS',
            groups: resp.data.groups
        })
    })
}

// export function Storage(ref) {
//     static displayFirebaseStorageImg(ref: String, callback: (url:String))
//     const imageRef = firebase.storage().ref(ref);
    
//     imageRef.getDownloadURL().then((url: String) => callback(url))
// }


export function getGroupUsers(group_id) {
    if (group_id) {
        Axios.get(`/api/groupUsers?group_id=${group_id}`).then(resp => {
            store.dispatch({
                type: 'GET_GROUP_USERS',
                payload: resp.data.groupUsers
            })
        })
    }
}

export function createGroup(groupName, user) {
    return Axios.post('/api/groups', {
        groupname: groupName,
        username: user
    })
}

export function searchUser(userNameSearched) {
        Axios.get(`/api/usersSearch?username=${userNameSearched}`).then(resp => {
            store.dispatch({
                type: 'FOUND_USER',
                payload: resp.data.username
            })
            console.log(resp.data.username)
        })
}

export function addUserToGroup(group_id, username) {
    console.log(group_id, username)
    return Axios.post('/api/group_user_links/addUser', {
        group_id: group_id,
        username: username
    })
}

// export function addImage(img) {
//     Axios.post('/api/recipes', {
//         imgURL : img.image
//     })
// }


export function addRecipe(recipe) {
    const ingredients = recipe.ingredient.list.map(x => x.name)

    Axios.post('/api/recipes', {
        name: recipe.name.name,
        prepHours: recipe.prepTime.prepHours,
        prepMinutes:recipe.prepTime.prepMinutes,
        directions: recipe.directions.directions,
        servings: recipe.prepTime.serves,
        username: recipe.username.user,
        ingredients: ingredients.join(", "),
        image: recipe.image.url
    })
    console.log('ingredients join - ',ingredients.join(", "))
}

// a function that grabs a user's uploaded recipes and the ID number of those recipes

export function getUserRecipes(user) {
  Axios.get(`/api/recipes?username=${user}`).then(resp => {
      console.log(resp.data.ingredients)
    store.dispatch({
      type: "GET_USER_RECIPES",
      userRecipes: resp.data,
      userRecipeIDs: resp.data[0].recipe_id
    })
  })
}

// export function addIngredients(ingredients) {
//     Axios.post('/api/ingredients', ingredients, {
//         ingred_id: this.state.ingred_id,
//         ingredient: this.state.ingredient
//     })
// }
// for potential future use

// export function Date() {
//     Date.now();
// }

// export function cancelCourse() {
//     document.getElementById("create-course-form").reset();
//   }
