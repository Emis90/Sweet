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
      this._firebaseInstance = firebase.initializeApp(config);
      this._firestore = firebase.firestore;
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

}