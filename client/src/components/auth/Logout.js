import React, { useContext } from 'react'
import Button from '@material-ui/core/Button';
import { AuthContext } from "../../lib/auth"

const Logout = (props) => {
    const { signout } = useContext(AuthContext)

    return (
        <div>
            <Button variant="contained" color="primary" onClick={signout} >
                Log Out
            </Button>
      </div>
    )
}

export default Logout