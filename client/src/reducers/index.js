const initialState = {
  inputs: [],
  itemCount: 0
}

export default function (state = initialState, action) {
  switch ( action.type ) {
    case 'ADD_INPUT':
      return {...state, inputs:[...state.inputs, action.item]}
    default:
      return state
  }
}