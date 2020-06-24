import * as firebase from 'firebase'; //setting up my wrapper
import 'firebase/firestore';

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
      this._firestore = firebase.firestore();
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
      const res = await this._firestore
        .collection(collectionPath)
        .doc(doc)

      return await res.set({
        savedPlaces: doc,
        id: userId
      })
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
        .doc('abc')
        .get();
      return res
    } catch (err) {
      console.log('OH no something did not work ', err);
    }
  }


  async getAllPlaces() {
    try {
      let array = []
      const res = await this._firestore.collection('savedPlaces')
      return await res.get().then((querySnapshot) => {
        querySnapshot.forEach((el) => {
          array.push({ el: el.data().ciao })
        })
        return array
      })


    } catch (error) {
      console.log(error)
    }
  }
}