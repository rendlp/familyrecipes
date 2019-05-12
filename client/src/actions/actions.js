
import Axios from 'axios';


// export function connect(user) {
//  socket = io.connect("http://10.68.0.212:3001")


// socket.emit("join", user)
// }

export function addRecipe(recipes) {
    Axios.post('/recipes', recipes)
}

// for potential future use

// export function Date() {
//     Date.now();
// }

// export function cancelCourse() { 
//     document.getElementById("create-course-form").reset();
//   }
