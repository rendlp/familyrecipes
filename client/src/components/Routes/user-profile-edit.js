import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../header'
import Footer from '../footer'
import  { Link } from 'react-router-dom'
import Logout from "../auth/Logout"
import { getUserInfo, editUserData } from '../../actions/actions'
import {AuthContext} from '../../lib/auth'
import { storage } from '../firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const UserProfileEdit = props => {

  const { user } = useContext(AuthContext)

    useEffect(() => {
      getUserInfo(user)
      console.log(firstname, lastname, image, user)
    },[])

    const userInfo = useSelector(appstate => appstate.userInfo)

    const [firstname, changeFirstName] = useState(userInfo.firstname)
    const [lastname, changeLastName] = useState(userInfo.lastname)

    const [image, setImage] = useState(userInfo.userPicURL || {})
    const [url, setUrl] = useState(userInfo.userPicURL)
    const [progress, setProgress] = useState(0)

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleUpload = e => {
        e.preventDefault()
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on('state_changed',

        // PROGRESS
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress)
        },

        // ERROR
        (err) => {
         console.log(err)
        },

        // GET IMAGE AFTER UPLOAD COMPLETION
        () => {
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                setImage(url)
                setUrl(url)
            })
        })


    }

    function handleSubmit (e) {
        e.preventDefault()
        editUserData(firstname, lastname, image, user)
        props.history.goBack()
    }


    console.log(image)

    return (
    <div>
    <Header />

   
     <div className='divHeader'>
     <Link to='/user_profile'><FontAwesomeIcon className='faBack' icon="arrow-left" /></Link>
     <div className='space'></div>
     <h1 className='editProfileh1'>Edit {user}'s Profile </h1>
    </div>
   
    <div className="edit-canvas">
        <form className='editProfileForm' onSubmit={handleSubmit}>
<div className='test'>
        <div className ='imgUploadDiv'>

         <progress className='progress' value={progress} max='100' />
         <input className='uploadInput' type='file' onChange={handleChange}   />
         <input type="hidden" name="image" value={image} />

         <div className='upload2'>
         <div>
         <img name="image" src={typeof image === 'string' ? image : 'https://via.placeholder.com/150'} className='imgUpload' alt='' value={url}  />
         </div>
         <button onClick={handleUpload}>Upload</button>
        </div>
        
        </div>
        <div className='profileEdit'>
            <h2>First Name:</h2>
                <input
                    type="text"
                    name="firstname"
                    className="formInput"
                    onChange= {e => changeFirstName(e.target.value)}
                    value=  {firstname}
                />
            <h2>Last Name:</h2>
                <input
                    type="text"
                    name="lastname"
                    className="formInput"
                    onChange= {e => changeLastName(e.target.value)}
                    value=  {lastname}
                />
        </div>
     
              <div id="update-profile"><button className='abutton' type="submit"> Update Profile</button></div>
            
            </div>
            </form>
        </div>

        <Footer />
      </div>
    )
}

export default UserProfileEdit
