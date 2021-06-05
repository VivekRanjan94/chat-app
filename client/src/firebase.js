import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyDlT9yoeiYAjln0djwoohpXY2ebyZmo5nc',
  authDomain: 'auth-development-80ad5.firebaseapp.com',
  projectId: 'auth-development-80ad5',
  storageBucket: 'auth-development-80ad5.appspot.com',
  messagingSenderId: '50942053687',
  appId: '1:50942053687:web:f7ac56a2f319cc115d9eb2',
}
const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth()
const firestore = app.firestore()
export const database = {
  users: firestore.collection('users'),
}
export default app
