import React, { useEffect } from 'react'
import useFormInput from '../hooks/useFormInput'

const Name = (props) => {

    const [values, changeForm, resetForm] = useFormInput({...props.formData});

    let manageFunc = props.manageForm;

    useEffect(() => {
        manageFunc('name', values);
    }, [values]);

        return (
            <form>
            <div className="test">
                <label  >
                <h1>Name</h1>
                </label>
            
            <input 
                type="text"
                name="name"
                className="formInput"
                onChange= {changeForm}
                value=  {values.name || ''}
            />
        </div>
        </form>
        )
    }
    

export default Name;