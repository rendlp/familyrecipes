const initialState = {
  recipes: [],
  groups: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, recipes: [...state.recipes, action.payload] }
    
    case "GET_GROUPS":
      return {...state, groups: action.groups}

    default:
      return state
  }
}