import React, { useEffect, useState } from 'react'
import useFormInput from '../hooks/useFormInput'
import { saveInput } from '../../actions/saveInput'

const Ingredient = (props) => {
    const [values, changeForm, resetForm] = useFormInput({...props.formData});
    const [list, alterList] = useState(props.formData.list);

    let manageFunc = props.manageForm;

    useEffect(() => {
        manageFunc('ingredient', values);
    }, [values]);

    function handleEnter(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            e.persist();
            alterList(list => {
                let newList = list.concat({key: new Date().getTime(), name: e.target.value});
                values.list = newList;
                manageFunc('ingredient', values);
                e.target.value = '';
                return newList;
            });
        }
    }
    
    return (
        <form>
            <input type="text" name="list" placeholder="2 cups of flour..." onKeyDown={handleEnter} />
            <ul>
                {list.map(item => {
                    return <li key={item.key}>{item.name}</li>
                })}
            </ul>
        </form>
    )
    
}

export default Ingredient;