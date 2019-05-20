// import React, { Component } from 'react'
// import Axios from 'axios';
// import firebase, { storage } from 'firebase'

// class UploadPhoto extends Component {

//     state = {
//         selectedFile : null,
//         url : '',
//         targetImg: ''
//     }
    

//     fileSelectedHandler = e => {
//         this.setState({
//             selectedFile: e.target.files[0]
//         })
//         console.log(e.target.files[0])
//     }

//     fileUploadHandler = (e) => {
//         e.preventDefault()
       
//         const fd = new FormData();
//         fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
//         Axios.post('https://us-central1-nettles.cloudfunctions.net/uploadFile', fd)
//         .then(res => {
//             console.log(res);
//             alert('Upload Successful!')
   
//         })
//     }

//     // getImage (targetImg) {
//     //     this.imageReference.getDownloadURL().then(url => {
//     //         targetImg.src = url;
//     //     });
//     // }

//     // handleUploadSuccess = filename => {
//     //     this.setState({ progress: 100, isUploading: false });
//     //     firebase.storage
//     //       .ref("images")
//     //       .child(filename)
//     //       .getDownloadURL()
//     //       .then(url => this.props.onChangeImageURL(url, filename));
//     //   };

//     render() {
//         return (
//             <div className='photoDiv'>

//                 <input 
//                 style={{ display: 'none' }}
//                 className='uploadInput' type='file' 
//                 onChange={this.fileSelectedHandler}
//                 ref={fileInput => this.fileInput = fileInput} />

//                 <button
//                 onClick={() => this.fileInput.click()}
//                 className="uploadButton">
//                     Choose Photo</button>

//                 <button 
//                 className='uploadButton' 
//                 onClick={this.fileUploadHandler}>
//                     Upload</button>
//                     <img className='imgUpload' onSubmit={this.filepath} src={this.state.url} alt='' />
                            
//             </div>
//         )
//     }
// }

// export default UploadPhoto;





















// import React, {Component} from 'react';
// import { Storage, storage } from 'firebase'

// class UploadPhoto extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             image: null,
//             url: ''
//          }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleUpload = this.handleUpload.bind(this);
//     }

    

//     handleChange = e => {
//         if (e.target.files[0]) {
//             const { image } = this.state
//             this.setState(() => ({ image }));

//         }
//     }

//     handleUpload = () => {
//         const { image } = this.state;
//         const uploadTask = Storage.ref(`images/${image.name}`).put(image);
//         uploadTask.on('state_changed', 
//         (snapshot) => {

//         },
//         (error) => {
//          console.log(error)
//         }, 
//         () => {

//             Storage.ref('images').child(image.name).getDownloadURL().then(url => {
//                 console.log(url);
//             })

//         });

//     }

//     render() {
//         return (
//             <div>
//                 <input
//                 type='file'
//                 onChange={this.handleChange} />
//                 <button onClick={this.handleUpload}>Upload</button>
  
//             </div>
//         )
//     }
// }

// export default UploadPhoto;