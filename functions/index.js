// import firebase from 'firebase/app'
// import 'firebase/storage'


//   var firebaseConfig = {
//     apiKey: "AIzaSyAM2AebeclAiK6v8cKd5Ah57wL1BSd1gxA",
//     authDomain: "nettles.firebaseapp.com",
//     databaseURL: "https://nettles.firebaseio.com",
//     projectId: "nettles",
//     storageBucket: "nettles.appspot.com",
//     messagingSenderId: "364326160130",
//     appId: "1:364326160130:web:94caf6d60003a27e"
//   };

//   firebase.initializeApp(firebaseConfig);

//   const storage = firebase.storage();

//   export {
//       storage, firebase as default
//   }






























// const functions = require('firebase-functions');
// const express = require('express')
// const os = require('os');
// const path = require('path');
// const spawn = require('child-process-promise').spawn;
// const cors = require('cors')({ origin: true });
// const Busboy = require('busboy');
// const fs = require('fs')

// const { Storage } = require("@google-cloud/storage");
// const gcconfig = {
//     projectId: 'nettles',
//     keyFilename:'nettles-firebase-adminsdk-ev27j-fdaed6eecc.json'
// }
// const gcs = new Storage(gcconfig);


// exports.uploadFile = functions.https.onRequest((req, res) => {
//     cors(req, res, () => {
//         if (req.method !== 'POST') {
//             return res.status(500).json({
//                 message:'nope!'
//             });
//         }
//         const busboy = new Busboy({ headers: req.headers });
//         let uploadData = null;
//         let fp = ''

//         busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
//             filepath = path.join(os.tmpdir(), filename);
//             uploadData = {file: filepath, type: mimetype};
//             file.pipe(fs.createWriteStream(filepath));
//         });

//         busboy.on('finish', () => {
//             const bucket = gcs.bucket('nettles.appspot.com')
//             bucket
//             .upload(uploadData.file, {
//                 uploadType: 'media',
//                 metadata: {
//                     metadata: {
//                         contentType: uploadData.type
//                     }
//                 }
//             })
//         .then(() => {
            
//             res.status(200).json({
//                 message: 'yay!',
//                 filepath: filepath
//             });
         
//         })
//        .catch(err => {
//         return res.status(500).json ({
//             error:err
//         });
//        });
//     });

//     busboy.end(req.rawBody);
//  })
// });






// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// exports.onFileChange = functions.storage.object().onChange(event => {
//     const object = event.data;
//     const bucket = object.bucket;
//     const contentType = object.contentType;
//     const filePath = object.name;

//     if(object.resourceState === 'not_exists') {
//         console.log('We deleted a file, exit...');
//         return;
//     }

//     if(path.basename(filePath).startsWith("resized-")) {
//         console.log('We already renamed that file!');
//         return;
//     }

//     const destBucket = gcs.bucket(bucket);
//     const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
//     const metadata = { contentType: contentType };
//     return destBucket
//     .file(filePath)
//     .download({
//         destination: tmpFilePath
//     })
//     .then(() => {
//         return spawn("convert", [tmpFilePath, "-resize", "500x500", tmpFilePath])
//     })
//     .then(() => {
//         return destBucket.upload(tmpFilePath, {
//             destination: "resized-" + path.basename(filePath),
//             metadata: metadata
//         });
//     });
// });



// import firebase from 'firebase/app'
// import 'firebase/storage'

// const { Storage } = require("@google-cloud/storage");
// const gcconfig = {
//     projectId: 'nettles',
//     keyFilename:'nettles-firebase-adminsdk-ev27j-fdaed6eecc.json',
//     projectId: 'nettles',
//     storageBucket: 'nettles.appspot.com'
// };
// const gcs = new Storage(gcconfig);
// firebase.initializeApp(gcs);

// const Storage = firebase.Storage();

// export {
//     Storage, firebase as default
// }