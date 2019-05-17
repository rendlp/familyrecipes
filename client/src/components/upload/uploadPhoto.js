import React, { Component } from 'react'
import Axios from 'axios';

class uploadPhoto extends Component {

    state = {
        selectedFile: null
    }

    fileSelectedHandler = e => {
        this.setState({
            selectedFile: e.target.files[0]
        })
        console.log(e.target.files[0])
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
        Axios.post('https://us-central1-nettles.cloudfunctions.net/uploadFile', fd)
        .then(res => {
            console.log(res);
        })
    }

    render() {
        return (
            <div className='uploadDiv'>
                <h1>upload a recipe photo</h1>
                <input className='uploadInput' type='file' onChange={this.fileSelectedHandler} />
                <button className='uploadButton' onClick={this.fileUploadHandler}>Upload</button>
            </div>
        )
    }
}

export default uploadPhoto;