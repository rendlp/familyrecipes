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

export function changeStatus(id) {
    store.dispatch({
        type: 'CHANGE_STATUS',
        id: id
    })
}