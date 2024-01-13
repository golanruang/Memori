// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import Constants from "expo-constants";
import { initializeAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4rRc0ZVsjpx446_xVSm4RMoNkllVTDTg",
  authDomain: "memori-c3fc3.firebaseapp.com",
  projectId: "memori-c3fc3",
  storageBucket: "memori-c3fc3.appspot.com",
  messagingSenderId: "811855132828",
  appId: "1:811855132828:web:a3341e185039b401b91559"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with Persistence
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

export default app;
// export { auth };