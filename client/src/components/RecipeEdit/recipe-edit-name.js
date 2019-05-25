import React, { useEffect, useState } from 'react'
import useFormInput from '../hooks/useFormInput'






const EditName = (props) => {
    
    const [values, changeForm] = useFormInput({...props.formData});

    let manageFunc = props.manageForm;

    useEffect(() => {
        manageFunc('name', values);
    }, [values]);

          return (

              <div className="test">

                <h1>Name</h1>


                <input
                  type="text"
                  name="name"
                  className="formInput"
                  onChange= {changeForm}
                  value=  {values.name || ''}
                />
              </div>

        )
    }


export default EditName
