import React, { Component } from 'react'
import { storage } from '../firebase'


class ImageUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: null,
            url: '',
            progress: 0
        }

        this.handleChange = this
        .handleChange
        .bind(this);
        this.handleUpload = this
        .handleUpload
        .bind(this)
    }

    handleChange = e => {
        if(e.target.files[0]) {
            const image  = e.target.files[0]
            this.setState(() => ({image}))
        }
    }

    handleUpload = e => {
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on('state_changed',

        // PROGRESS
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress})

        },

        // ERROR
        (err) => {

         console.log(err)
        },

        // GET IMAGE AFTER UPLOAD COMPLETION
        () => {
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url})
            })
        })
    }


    render() {
        return(

             <div className ='imgUploadDiv'>
                <progress className='progress' value={this.state.progress} max='100' />
                <input className='uploadInput' type='file' onChange={this.handleChange} />
                <img src={this.state.url || 'https://via.placeholder.com/150'} className='imgUpload' alt='' />
                <button onClick={this.handleUpload}>Upload</button>
             </div>

        )
    }
}

export default ImageUpload;
