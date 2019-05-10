import store from '../store'

export function Date() {
    Date.now();
}

export function createUsername(username) {
    store.dispatch({
        type: 'SET_USERNAME',
        payload: username
    })
}

export function cancelCourse() { 
    document.getElementById("create-course-form").reset();
  }