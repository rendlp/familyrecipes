const initialState = {
  inputs: [],
  itemCount: 0,
  recipes: [],
  groups: []
}

export default function(state = initialState, action) {
  switch (action.type) {

    case "ADD_MESSAGE":
      return { ...state, recipes: [...state.recipes, action.payload] }

    case "GET_GROUPS":
      return {...state, groups: action.groups}

    case 'ADD_INPUT':
    return {...state, inputs:[...state.inputs, action.item]}

    case 'ADD_RECIPE':
    return {...state, recipes:[...state.recipes, action.recipe]}

    default:
      return state
  }
}
