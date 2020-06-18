import * as firebase from 'firebase'; //setting up my wrapper
import 'firebase/firestore';
import firestore from '@react-native-firebase/firestore'
export class FirebaseWrapper {
  constructor() {
    this.initialized = false;
    this._firebaseInstance = null; //instance of our npm package
    this._firebaseWrapperInstance = null; //instance of our wrapper
    this._firestore = null;
  }
  Initialize(config) {
    if (!this.initialized) {
      //initialize firebase
      this._firebaseInstance = firebase.initializeApp(config);
      this._firestore = firestore;
      this.initialized = true;
      console.log('It worked! :)');

    }
  }
  static GetInstance() {
    if (null == this._firebaseWrapperInstance) {
      this._firebaseWrapperInstance = new FirebaseWrapper();
    }
    return this._firebaseWrapperInstance;
  }
  async CreateNewDocument(collectionPath, doc, userId) {//doc is an object
    try {
      const ref = await this._firestore.collection(collectionPath).doc('abc')
      const res = await this._firestore
        .collection('savedPlaces')
        .doc('abc')
        .get();
      console.log('ref from firestore ', res)
      const timestamp = firebase.firestore.Timestamp.now().toDate()
      return await ref.set({
        userId,
        savedPlaces: [doc],
        createdAt: timestamp,
        id: new Date().valueOf(),
      })
      const res = await this._firestore
        .collection('savedPlaces')
        .doc(userId)
        .get();
      if (!res.data()) {
        return await ref.set({
          savedPlaces: doc,
          createdAt: timestamp,
          id: new Date().valueOf(),
        })
      } else {
        return await ref.set({ savedPlaces: doc, added: timestamp, id: ref.id })
      }

    } catch (error) {
      console.log('document not created :/ ', error)
    }
  }

  async SetUpCollectionListener(userId) {
    console.log('listener listening')
    try {
      console.log('calling setup did work');
      const res = await this._firestore
        .collection('savedPlaces')
        .doc(userId)
        .get();
      console.log(res.data().times)
      return res.data().times;
    } catch (err) {
      console.log('OH no something did not work ', err);
    }
  }
}