// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBjKHWA_8IAnCdupLKkdV8z0fIcX7fTI8U',
  authDomain: 'greenlife-a5231.firebaseapp.com',
  projectId: 'greenlife-a5231',
  storageBucket: 'greenlife-a5231.appspot.com',
  messagingSenderId: '577222033697',
  appId: '1:577222033697:web:de9016c86cb2741511be60',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export {auth};

// import {initializeApp} from 'firebase/app';
// import {getAuth} from 'firebase/auth';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyBjKHWA_8IAnCdupLKkdV8z0fIcX7fTI8U',
//   authDomain: 'greenlife-a5231.firebaseapp.com',
//   projectId: 'greenlife-a5231',
//   storageBucket: 'greenlife-a5231.appspot.com',
//   messagingSenderId: '577222033697',
//   appId: '1:577222033697:web:de9016c86cb2741511be60',
// };

// const app = initializeApp(firebaseConfig);

// export const authentication = getAuth(app);
