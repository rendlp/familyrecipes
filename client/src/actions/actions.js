import Axios from 'axios';

export function addRecipe(recipes) {
    Axios.post('/addrecipe', recipes)
}

