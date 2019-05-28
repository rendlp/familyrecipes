import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from '../header'
import Footer from '../footer'
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
        <div>
          <img className="user-pic" src={userInfo.userPicURL} alt='' />    
        </div>

        <div className='profileInformation'>
          <h3>Username:</h3>
          <p>{user}</p>
          <h3>First Name:</h3>
          <p>{userInfo.firstname}</p>
          <h3>Last Name:</h3>
          <p>{userInfo.lastname}</p>
        </div>
        </div>

        <div className='invisible'></div>
        <Footer />
      </div>
    )
}

export default GroupMemberProfile