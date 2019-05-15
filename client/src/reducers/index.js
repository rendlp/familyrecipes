const initialState = {
  userRecipes: [],
  groups: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, recipes: [...state.recipes, action.payload] }

    case "GET_GROUPS":
      return {...state, groups: action.groups}

    case "GET_USER_RECIPES":
      return {...state, userRecipes: action.payload}

    default:
      return state
  }
}
