const initialState = {
  recipes: [],
  groups: [],
  groupUsers: [],
  currentGroup: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, recipes: [...state.recipes, action.payload] }

    case "GET_GROUPS":
      return {...state, groups: action.groups}

    case "GET_GROUP_USERS":
      return {...state, groupUsers: action.payload, currentGroup: action.payload[0].groupname}

    default:
      return state
  }
}
