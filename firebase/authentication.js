import * as firebase from 'firebase'
import 'firebase/firestore'



export const signOutUser = async () => {
  await firebase
    .auth()
    .signOut()
    .then(() => console.log('user signed out!'))
    .catch((error) => {
      console.log("dit NOT sign out >> ", error)
    });
};

