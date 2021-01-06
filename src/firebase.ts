import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
}

// if (firebase.apps.length === 0) {
firebase.initializeApp(firebaseConfig)
// }

const database = firebase.database()
export const roomsRef = database.ref('rooms')

export const createRoom = (name: string, password: string): void => {
  roomsRef.push({ name, password })
}
