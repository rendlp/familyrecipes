import store from '../store'
import Axios from 'axios'
// import { checkPropTypes, string } from 'prop-types'
import * as firebase from 'firebase/app'

// export function addBoth(both) {
//     Axios.post('/api/both', both)
// }

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

// a function that will send uploaded images to the application's database
export function addImage(img) {
    Axios.post('/api/recipes', {
        imgURL : img.image
    })
}


export function addRecipe(recipe) {
    const ingredients = recipe.ingredient.list.map(x => x.name)

    Axios.post('/api/recipes', {
        name: recipe.name.name,
        prepHours: recipe.prepTime.prepHours,
        prepMinutes:recipe.prepTime.prepMinutes,
        directions: recipe.directions.directions,
        servings: recipe.prepTime.serves,
        username: recipe.username.user,
        imgURL: recipe.image,
        ingredients: ingredients.join("*/*")
    })
}

export function shareRecipeWithGroup(recipeId, groupChosen, recipeName) {
    Axios.post('/api/group_recipe_links', {
        recipe_id: recipeId,
        group_id: groupChosen,
        name: recipeName
    })
}

// a function that grabs a user's uploaded recipes and the ID number of those recipes
export function getUserRecipes(user) {
  Axios.get(`/api/recipes?username=${user}`).then(resp => {
    store.dispatch({
      type: "GET_USER_RECIPES",
      userRecipes: resp.data,
    })
  })
}

export function getCurrentRecipe(recipeId) {
    Axios.get(`/api/recipes/current?recipe_id=${recipeId}`).then(resp => {
        console.log(resp.data[0].ingredients.split("*/*"))
      store.dispatch({
        type: "GET_CURRENT_RECIPE",
        currentRecipe: resp.data[0],
        currentRecipeIngredients: resp.data[0].ingredients.split("*/*")
      })
    })
  }

export function getGroupRecipes(group_id) {
    Axios.get(`/api/groupRecipes?group_id=${group_id}`).then(resp => {
        console.log('group recipes actions - ',resp.data.results)
      store.dispatch({
        type: "GET_GROUP_RECIPES",
        payload: resp.data.results
      })
    })
  }
  // function that grabs a user's list of favorited recipes
  export function getUserFavorites(user) {
    Axios.get(`/api/user_favorites?username=${user}`).then(resp => {
        console.log(resp.data)
      store.dispatch({
        type: 'GET_USER_FAVORITES',
        payload: resp.data.userFavorites,
      })
    })
  }
  // a function that will post a favorited recipe to the application's database(user_favories table)
  export function addFavoriteRecipe(name, recipe_id, user) {
    Axios.post(`/api/user_favorites`, {
      recipeName: name,
      recipe_id: recipe_id,
      username: user
    })
  }

  // a function that will grab a user's list of created recipebooks from the application's database
  export function getRecipeBooks(user) {
    Axios.get(`/api/user_recipebooks?username=${user}`).then(resp => {
      store.dispatch({
        type: 'GET_USER_RECIPEBOOKS',
        payload: resp.data.userRecipeBooks,
      })
    })
  }

  export function addRecipeToRecipeBook(recipeId, recipeBookChosen, recipeName) {
    Axios.post('/api/user_recipebooks_links', {
      recipe_id: recipeId,
      recipebook_id: recipeBookChosen,
      recipe_name: recipeName
    })
}
  // a function that will add a user created recipebook to the application's database(user_recipebooks table)
  export function createRecipebook(user, recipebookName) {
    return Axios.post('/api/user_recipebooks', {
      username: user,
      recipebook_name: recipebookName
    })
  }
  // a function that will grab recipes saved within a user's created recipebook
  export function getRecipesWithinRecipebooks(recipebook_id) {
    Axios.get(`/api/user_recipebooks_links?recipebook_id=${recipebook_id}`).then(resp => {
      console.log(resp.data.addedRecipesInsideRecipebooks)
      store.dispatch({
        type: "GET_RECIPES_WITHIN_RECIPEBOOKS",
        payload: resp.data.addedRecipesInsideRecipebooks
      })

    })
  }

  
// for potential future use

// export function Date() {
//     Date.now();
// }

// export function cancelCourse() {
//     document.getElementById("create-course-form").reset();
//   }
