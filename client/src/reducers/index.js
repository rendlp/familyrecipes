const initialState = {

  userRecipes: [],


  recipes: [],
  groups: [],
  groupUsers: [],
  currentGroup: '',
  foundUser: ''

}

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, recipes: [...state.recipes, action.payload] }

    case "GET_GROUPS":
      return {...state, groups: action.groups}


    case "GET_USER_RECIPES":
      return {...state, userRecipes: action.payload}

    case "GET_GROUP_USERS":
      return {...state, groupUsers: action.payload, currentGroup: action.payload[0].groupname}

    case "FOUND_USER":
      return {...state, foundUser: action.payload}


    default:
      return state
  }
}
