import React, {useState, useEffect} from 'react';
import useFormInput from '../hooks/useFormInput';

const TheStuff = (props) => {

    const [values, changeForm, resetForm] = useFormInput({...props.formData})

    let manageFunc = props.manageForm

    useEffect( () => {
        manageFunc('ingredients', values)
    }, [values])

    return (
        <form>
            <textarea 
                id="ingredients-textarea"
                name="ingredients" 
                placeholder="List ingredients here"
                onChange={changeForm}
                value={values.ingredients || ''}
            />
        </form>
    )
}

export default TheStuff