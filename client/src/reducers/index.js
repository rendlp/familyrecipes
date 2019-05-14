const initialState = {
  recipes: [],
  userRecipes: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, recipes: [...state.recipes, action.payload] }
    case 'GET_USER_RECIPES':
      return {...state, userRecipes: [...state.userRecipes, action.payload] }
    default:
      return state
  }
}
