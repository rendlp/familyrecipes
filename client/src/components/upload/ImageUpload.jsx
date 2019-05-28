import React, { useState, useEffect } from 'react'
import { storage } from '../firebase'
import useFormInput from '../hooks/useFormInput'
import nettles from '../assets/nettle.jpg'


const ImageUpload = (props) => {
    const [image, setImage] = useState({})
    const [url, setUrl] = useState('')
    const [progress, setProgress] = useState(0)

    const [values, changeForm, resetForm] = useFormInput({...props.formData})

    let manageFunc = props.manageForm

    useEffect( () => {
      manageFunc('image', values)
    }, [values])

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
                props.addImageToForm(url)
                setUrl(url)
            })
        })
    }

    return (

        <div className ='imgUploadDiv'>
          <form onSubmit={handleUpload}>
           <progress className='progress' value={progress} max='100' />
           <input className='uploadInput' type='file' onChange={handleChange}   />
           <input type="hidden" name="image" value={url} />
           <img name="image" src={url || nettles } className='imgUpload' alt='' value={url}  />
           <button className='abutton' onClick={handleUpload}>Upload</button>
          </form>
        </div>


   )
}

// class ImageUpload extends Component {

//         state = {
//             image: null,
//             url: '',
//             progress: 0
//         }

//     handleChange = e => {
//         if(e.target.files[0]) {
//             const image  = e.target.files[0]
//             this.setState(() => ({image}))
//         }
//     }

//     handleUpload = e => {
//         const { image } = this.state;
//         const uploadTask = storage.ref(`images/${image.name}`).put(image)
//         uploadTask.on('state_changed',

//         // PROGRESS
//         (snapshot) => {
//             const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
//             this.setState({progress})

//         },

//         // ERROR
//         (err) => {

//          console.log(err)
//         },

//         // GET IMAGE AFTER UPLOAD COMPLETION
//         () => {
//             storage.ref('images').child(image.name).getDownloadURL().then(url => {
//                 console.log(url);
//                 this.setState({url})
//             })
//         })
//     }


//     render() {
//         return(

//              <div className ='imgUploadDiv'>
//                 <progress className='progress' value={this.state.progress} max='100' />
//                 <input className='uploadInput' type='file' onChange={this.handleChange} />
//                 <img src={this.state.url || 'https://via.placeholder.com/150'} className='imgUpload' alt='' />
//                 <button onClick={this.handleUpload}>Upload</button>
//              </div>

//         )
//     }
// }

export default ImageUpload
