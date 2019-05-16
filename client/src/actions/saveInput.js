import store from '../store'
let id = 0

export function saveInput(input) {
    id++
    store.dispatch({
        type:'ADD_INPUT',
        item: {
            input: input,
            status: 'pending...',
            id: id
        }
    })
}

export function saveRecipe(resp) {
    store.dispatch({
        type:'ADD_RECIPE',
        payload: {
            name: resp.data.name,
            prepHours: resp.data.prepHours,
            prepMinutes: resp.data.prepMinutes,
            directions: resp.data.directions,
            servings: resp.data.servings,
        }
    })
}

export function changeStatus(id) {
    store.dispatch({
        type: 'CHANGE_STATUS',
        id: id
    })
}