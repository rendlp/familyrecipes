import {useState} from 'react';

export default function useFormInput(formState={}) {
    const [formValues, modifyForm] = useState(formState);

    const setForm = (e) => {
        e.persist();
        modifyForm(values => ({...values, [e.target.name]: e.target.value}));
    };

    // const resetForm = (e) => {
    //     e.preventDefault();
    //
    //     for (var key in formValues) {
    //         formValues[key] = '';
    //     }
    //
    //     modifyForm({...formValues});
    // };

    return [formValues, setForm];
}

// const [values, modifyForm] = useState({});
//
// const changeForm = (e) => {
//     // values[e.target.name] = e.target.value;
//     // console.log('values =>', values);
//     // modifyForm(values);
//     e.persist();
//     modifyForm(values => ({...values, [e.target.name]: e.target.value}));
// };
