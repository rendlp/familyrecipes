import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from '../header'
import Footer from '../footer'
import  { Link } from 'react-router-dom'
import Logout from "../auth/Logout"
import { getUserInfo } from '../../actions/actions'

const GroupMemberProfile = props => {




const username = props.match.params.username

console.log(username)

    useEffect(() => {
      getUserInfo(username)
    },[])

  const userInfo = useSelector(appstate => appstate.userInfo)
  
  console.log(userInfo)
    return (
      <div>
        <Header />
        <Link to='/'><button className='backBtn'>Back</button></Link>
      
          <p>username:</p>
          <p>{username}</p>
          <p>First Name:</p>
          <p>{userInfo.firstname}</p>
          <p>Last Name:</p>
          <p>{userInfo.lastname}</p>
          <p>userPic:</p>
          <p>{userInfo.userPic}</p>

          <Logout />
        <Footer />
      </div>
    )
}

export default GroupMemberProfile