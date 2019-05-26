import {useState} from 'react';

export default function useFormInput(formState={}) {
    const [formValues, modifyForm] = useState(formState);

    const setForm = (e) => {
        e.persist();
        modifyForm(values => ({...values, [e.target.name]: e.target.value}));
    };

    

    return [formValues, setForm];
}
