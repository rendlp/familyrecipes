import React, { useEffect } from 'react'
import useFormInput from '../hooks/useFormInput'
// import UploadPhoto from '../upload/uploadPhoto'

const Name = (props) => {
    // const [values, modifyForm] = useState({});

    // const changeForm = (e) => {
    //     values[e.target.name] = e.target.value;
    //     modifyForm(values);
    //     e.persist();
    //     modifyForm(values => ({...values, [e.target.name]: e.target.value}));
    // };

    const [values, changeForm] = useFormInput({...props.formData});

    let manageFunc = props.manageForm;

    useEffect(() => {
        manageFunc('name', values);
    }, [values, manageFunc]);

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
