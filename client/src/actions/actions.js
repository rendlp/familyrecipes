import store from '../store'
import axios from 'axios';


// export function connect(user) {
//  socket = io.connect("http://10.68.0.212:3001")


// socket.emit("join", user)
// }

export function addRecipe(recipes) {
    axios.post('http://localhost:3000/recipes', recipes, {
        name: this.state.name,
        prep: this.state.prep,
        directions: this.state.directions
    })
}

export function getRecipes() {
  axios.get('http://localhost:3000/recipes').then(resp => {
    console.log(resp.data)
    store.dispatch({
      type: "GET_USER_RECIPES",
      payload: resp.data
    })
  })
}

export function addIngredients(ingredients) {
    axios.post('http://localhost:3000/ingredients', ingredients, {
        ingred_id: this.state.ingred_id,
        ingredient: this.state.ingredient
    })
}
// for potential future use

// export function Date() {
//     Date.now();
// }

// export function cancelCourse() {
//     document.getElementById("create-course-form").reset();
//   }
