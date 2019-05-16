import store from '../store'
import Axios from 'axios'


//SOCKET STUFF FOR LATER

// export function connect(user) {
//  socket = io.connect("http://10.68.0.212:3001")


// socket.emit("join", user)
// }

//GROUPS

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

export function addRecipe(recipes) {
    Axios.post('http://localhost:3000/recipes', recipes, {
        name: this.state.name,
        prep: this.state.prep,
        directions: this.state.directions
    })
}

export function getRecipes() {
  Axios.get('http://localhost:3000/recipes').then(resp => {
    console.log(resp.data)
    store.dispatch({
      type: "GET_USER_RECIPES",
      payload: resp.data
    })
  })
}

export function addIngredients(ingredients) {
    Axios.post('http://localhost:3000/ingredients', ingredients, {
        ingred_id: this.state.ingred_id,
        ingredient: this.state.ingredient
    })
}
// for potential future use

// export function Date() {
//     Date.now();
// }

// export function cancelCourse() {
//     document.getElementById("create-course-form").reset();
//   }
