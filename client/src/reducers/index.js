const initialState = {
  recipes: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, recipes: [...state.recipes, action.payload] }
    default:
      return state
  }
}