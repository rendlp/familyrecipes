import React, { useEffect, useContext } from 'react'
import Upload from '../components/Upload'
import Logout from "./auth/Logout"
import GroupList from "./GroupList"
import { AuthContext } from "../lib/auth"
// import { connect } from "../actions/actions"
import { getGroups } from '../actions/actions'
import { useSelector } from 'react-redux'


const Home = props => {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        getGroups(user)
    }, [])

    // useEffect(() => {
    //     // connect(user)
    // }, [user])

    // const groups = useSelector(appstate => appstate.groups)

    // console.log(groups)

    return (
        <div className="homePage">

            <span>{user}</span>
            <Logout />
            <GroupList />

            <Upload />
        </div>
    )
}


export default Home