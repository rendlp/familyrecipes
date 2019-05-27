import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from '../header'
import Footer from '../footer'
import  { Link } from 'react-router-dom'
import Logout from "../auth/Logout"
import { getUserInfo } from '../../actions/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GroupMemberProfile = props => {

  function backFunction(e) {
    e.preventDefault()
    props.history.goBack()

}


const user = props.match.params.username

console.log(user)

    useEffect(() => {
      getUserInfo(user)
    },[])

  const userInfo = useSelector(appstate => appstate.userInfo)
  
  console.log(userInfo)
    return (
      <div>
        <Header />
        
        <div className='divHeader2'>
        <div className='backArrowDiv' onClick={backFunction}><FontAwesomeIcon className='faBack' icon="arrow-left" /></div>
        <div className='space'></div>
        <h1 className='recipe-name'>{user}</h1>
        </div>

        <div className="userProfileDisplay">
          <img className="user-pic" src={userInfo.userPicURL} alt='' />    
          <p>First Name:</p>
          <p>{userInfo.firstname}</p>
          <p>Last Name:</p>
          <p>{userInfo.lastname}</p>
        </div>

          <Logout />
        <Footer />
      </div>
    )
}

export default GroupMemberProfile