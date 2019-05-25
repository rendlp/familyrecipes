import React, { useEffect } from 'react'
import useFormInput from '../hooks/useFormInput'

const Directions = (props) => {

    const [values, changeForm, resetForm] = useFormInput({...props.formData})

    let manageFunc = props.manageForm

    useEffect( () => {
        manageFunc('directions', values)
    }, [values])

        return (
            <form>
                <div className="directionDiv">
                    <label
                        htmlFor='name'
                        className="directions-text"></label>
                    <h1>Directions</h1>
            

                    <textarea
                        type="text"
                        name="directions"
                        id="directions"
                        onChange= {changeForm}
                        value={values.directions || ''}
                    />
                </div>
            </form>
        )

}

export default Directions
