
import Axios from 'axios';

// export function connect(user) {
//  socket = io.connect("http://10.68.0.212:3001")

// socket.emit("join", user)
// }



export function addRecipe(recipes) {
    Axios.post('/api/recipes', recipes)
}

export function addIngredients(ingredients) {
    Axios.post('/api/ingredients', ingredients)
}

export function addBoth(both) {
    Axios.post('/api/both', both)
}

// for potential future use

// export function Date() {
//     Date.now();
// }

// export function cancelCourse() { 
//     document.getElementById("create-course-form").reset();
//   }
