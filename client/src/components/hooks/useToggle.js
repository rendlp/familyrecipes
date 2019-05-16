import {useState} from 'react';

function useToggle(initialVal = false) {
    // call useState
    const [state, setState] = useState(initialVal);

    const toggle = () => {
        setState(!state);
    };

    return [state, toggle];
}

export default useToggle;

// return piece of state and a function to toggle it