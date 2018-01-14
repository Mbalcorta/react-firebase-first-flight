import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAZctUFGlNdgTZQt6dKk7RW2F5xTdVX_lY',
  authDomain: 'first-flight-with-friend-5616c.firebaseapp.com',
  databaseURL: 'https://first-flight-with-friend-5616c.firebaseio.com',
  projectId: 'first-flight-with-friend-5616c',
  storageBucket: '',
  messagingSenderId: '320671798964'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
