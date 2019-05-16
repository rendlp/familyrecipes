import store from 'react'
import Axios from 'axios';

export function addRecipe(recipes) {
    Axios.post('/api/recipes', recipes)
}

// export function addIngredients(ingredients) {
//     Axios.post('/api/ingredients', ingredients)
// }

export function addBoth(both) {
    Axios.post('/api/both', both)
}

export function getGroups(user) {
    console.log('group user =>', user);
    Axios.get(`/api/groups?username=${user}`).then(resp => {
        console.log('actions - get groups' ,resp.data.groups)
        store.dispatch({
            type: 'GET_GROUPS',
            groups: resp.data.groups
        })
    })
}

export function createGroup(groupName, user) {
    return Axios.post('/api/groups', {
        groupname: groupName,
        username: user
    })
    // .then(resp => { getGroups(user)
    // })
}

