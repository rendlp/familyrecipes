import React, { useEffect } from 'react'
import useFormInput from '../hooks/useFormInput'

const Directions = (props) => {

    const [values, changeForm, resetForm] = useFormInput({...props.formData})

    let manageFunc = props.manageForm

    useEffect( () => {
        manageFunc('directions', values)
    }, [values])

    // state = {
    //     directions:'',
    //     directionsError:'',
    //     directionsClass:'',

    // }

    // handleChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
<<<<<<< HEAD
 
=======


>>>>>>> 6fa22fce838533a78d260d54e7221db2aba56fca
        return (
            <form>
                <div id="directionDiv">
                    <label
                        htmlFor='name'
                        className="directions-text">
                    <h1>Directions</h1>
                    </label>

                    <textarea
                        type="text"
                        // ref="recipes_directions"
                        name="directions"
                        id="directions"
                        onChange= {changeForm}
                        value={values.directions || ''}
                    />
                </div>
            </form>
        )

}

export default Directions;
