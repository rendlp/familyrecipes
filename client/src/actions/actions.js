import io from "socket.io-client"
import store from '../store'
import Axios from 'axios';

let socket = null

// export function connect(user) {
//  socket = io.connect("http://10.68.0.212:3001")


// socket.emit("join", user)
// }

export function addRecipe(recipes) {
    Axios.post('/addrecipe', recipes)
}

// for potential future use

// export function Date() {
//     Date.now();
// }

// export function cancelCourse() { 
//     document.getElementById("create-course-form").reset();
//   }
