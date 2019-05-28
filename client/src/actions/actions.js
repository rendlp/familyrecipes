import store from '../store'
import Axios from 'axios'


// GROUPS

export function getGroups(user) {
    Axios.get(`/api/groups?username=${user}`).then(resp => {
        store.dispatch({
            type: 'GET_GROUPS',
            groups: resp.data.groups
        })
    })
}


export function getGroupUsers(group_id) {
    if (group_id) {
        Axios.get(`/api/groupUsers?group_id=${group_id}`).then(resp => {
          console.log(resp.data.groupUsers)
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

// USER

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

export function  getUserInfo(user) {
    return Axios.get(`/api/users?username=${user}`).then(resp => {
        store.dispatch({
        type: 'GET_USER_INFO',
        payload: resp.data.results[0]
        })
        console.log(resp.data.results[0])
    })
}

export function editUserData(firstname, lastname, image, user) {
    console.log(firstname, lastname)
    return Axios.put('/api/users/edit', {
        firstname: firstname,
        lastname: lastname,
        userPicURL: typeof image === 'string' ? image : null,
        username: user
    })
    }

// RECIPES POSTING

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
        // validate if image has no upload
        imgURL: typeof recipe.image === 'string' ? recipe.image : null,
        ingredients: ingredients.join("*/*")
    })
}

export function editRecipe(name, prepHours, prepMinutes, servings, directions, ingredients, url, recipeId) {
    Axios.put('/api/recipes/edit', {
        name: name,
        prepHours: prepHours,
        prepMinutes: prepMinutes,
        servings: servings,
        directions: directions,
        ingredients: ingredients.join("*/*"),
        url: typeof url === 'string' ? url : null,
        recipe_id: recipeId
    })
    // console.log(name, prepHours, prepMinutes, servings, directions, ingredients.join("*/*"), url, recipeId)
}

export function editRecipeInGroupLinks(name, url, recipeId) {
    Axios.put('/api/group_recipe_links/edit', {
        name: name,
        url: typeof url === 'string' ? url : null,
        recipe_id: recipeId
    })
}

export function editRecipeInUserFavorites(name, url, recipeId) {
    Axios.put('/api/user_favorites/edit', {
        name: name,
        url: typeof url === 'string' ? url : null,
        recipe_id: recipeId
    })
}

export function editRecipeInUserRecipebooksLinks(name, url, recipeId) {
    Axios.put('/api/user_recipebooks_links/edit', {
        name: name,
        url: typeof url === 'string' ? url : null,
        recipe_id: recipeId
    })
}

export function shareRecipeWithGroup(recipeId, groupChosen, recipeName, url) {
    Axios.post('/api/group_recipe_links', {
        recipe_id: recipeId,
        group_id: groupChosen,
        name: recipeName,
        url: url
    })
}

// a function that will post a favorited recipe to the application's database(user_favories table)
export function addFavoriteRecipe(name, recipe_id, user, url) {
    Axios.post(`/api/user_favorites`, {
      recipeName: name,
      recipe_id: recipe_id,
      username: user,
      url: url
    })
  }


// RECIPES RETRIEVING

// a function that grabs a user's uploaded recipes and the ID number of those recipes
export function getUserRecipes(user) {
  Axios.get(`/api/recipes?username=${user}`).then(resp => {
    store.dispatch({
      type: "GET_USER_RECIPES",
      userRecipes: resp.data,
    })
  })
}

export function getCurrentUserOwnedRecipe(recipe_id, user, history) {
    Axios.get(`/api/recipes/current/userOwned?recipe_id=${recipe_id}&user=${user}`).then(resp => {
        console.log(resp.data[0].ingredients.split("*/*"))
      store.dispatch({
        type: "GET_CURRENT_RECIPE",
        currentRecipe: resp.data[0],
        currentRecipeIngredients: resp.data[0].ingredients.split("*/*")
      })
    }).catch(err => {
        history.push('/no')
    })
  }



//   export function getCurrentUserOwnedRecipeToEdit(recipe_id, user, history) {
//     Axios.get(`/api/recipes/current/userOwned?recipe_id=${recipe_id}&user=${user}`).then(resp => {
//         console.log(resp.data)
//       store.dispatch({
//         type: "GET_CURRENT_RECIPE",
//         currentRecipe: {
//             name: resp.data[0].name,
//             ingredient: {
//                 list: resp.data[0].ingredients.split("*/*")
//             },
//             directions: resp.data[0].directions,
//             prepHours: resp.data[0].prepHours,
//         }
//       })
//     }).catch(err => {
//         history.push('/no')
//     })
//   }

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


  // RECIPE BOOKS

  // a function that will add a user created recipebook to the application's database(user_recipebooks table)
  export function createRecipebook(user, recipebookName) {
    return Axios.post('/api/user_recipebooks', {
      username: user,
      recipebook_name: recipebookName
    })
  }

  export function addRecipeToRecipeBook(recipeId, recipeBookChosen, recipeName, url) {
    Axios.post('/api/user_recipebooks_links', {
      recipe_id: recipeId,
      recipebook_id: recipeBookChosen,
      recipe_name: recipeName,
        url: url
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

  // a function that will grab recipes saved within a user's created recipebook
  export function getRecipesWithinRecipebooks(recipebook_id) {
    Axios.get(`/api/user_recipebooks_links?recipebook_id=${recipebook_id}`).then(resp => {
      store.dispatch({
        type: "GET_RECIPES_WITHIN_RECIPEBOOKS",
        payload: resp.data.addedRecipesInsideRecipebooks
      })

    })
  }

  export function getCurrentRecipeBook(recipebook_id) {
    Axios.get(`/api/user_recipebooks/current?recipebook_id=${recipebook_id}`).then(resp => {
      console.log(resp.data.results[0])
      store.dispatch({
        type: "GET_CURRENT_RECIPEBOOK",
        payload: resp.data.results[0]
      })

    })
  }






//-----------------------------------------------------------//

  // export function Storage(ref) {
//     static displayFirebaseStorageImg(ref: String, callback: (url:String))
//     const imageRef = firebase.storage().ref(ref);

//     imageRef.getDownloadURL().then((url: String) => callback(url))
// }


// for potential future use

// export function Date() {
//     Date.now();
// }

// export function cancelCourse() {
//     document.getElementById("create-course-form").reset();
//   }
