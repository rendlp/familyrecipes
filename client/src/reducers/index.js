const initialState = {

  inputs: [],
  itemCount: 0,
  userRecipes: [],
  currentRecipe:{},
  currentRecipeIngredients: [],
  groups: [],
  groupUsers: [],
  currentGroup: '',
  foundUser: '',
  userFavorites: [],
  userRecipeBooks: [],
  groupRecipes: []

}

export default function(state = initialState, action) {
  //if (action.type) ...
  switch (action.type) {

    case "ADD_MESSAGE":
      return { ...state, recipes: [...state.recipes, action.payload] }

    case "GET_GROUPS":
      return {...state, groups: action.groups}


    case 'ADD_INPUT':
    return {...state, inputs:[...state.inputs, action.item]}

    case 'ADD_RECIPE':
    return {...state, recipes:[...state.recipes, action.recipe]}

    // then grab a list of a user's uploaded recipes
    case "GET_USER_RECIPES":
      return {...state, userRecipes: action.userRecipes}

    case "GET_CURRENT_RECIPE":
      return {...state, currentRecipe: action.currentRecipe, currentRecipeIngredients: action. currentRecipeIngredients}

    case "GET_GROUP_USERS":
      return {...state, groupUsers: action.payload, currentGroup: action.payload[0].groupname}

    case "FOUND_USER":
      return {...state, foundUser: action.payload}
    // then grab a list of a user's favorited recipes
    case 'GET_USER_FAVORITES':
      return {...state, userFavorites: action.payload}
    // then grab a list of a user's recipebooks
    case 'GET_USER_RECIPEBOOKS':
      return {...state, userRecipeBooks: action.payload}

    case "GET_GROUP_RECIPES":
      return {...state, groupRecipes: action.payload}



    default:
      return state
  }
}
