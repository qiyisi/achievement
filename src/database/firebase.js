import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAyRwfNlwHAgCS6SWvwokkfqr3BZ-kBLVo",
  authDomain: "achievement-qiyisi.firebaseapp.com",
  databaseURL: "https://achievement-qiyisi.firebaseio.com",
  projectId: "achievement-qiyisi",
  storageBucket: "achievement-qiyisi.appspot.com",
  messagingSenderId: "694193879902",
  appId: "1:694193879902:web:003999a023686f553f2dcf"
};

const db = firebase.initializeApp(firebaseConfig).firestore();

const getCollection = (collection) => {
  return new Promise((resolve) => {
    const docs = [];
    db.collection(collection).get().then(snapshot => {
      snapshot.forEach(doc => {
        docs.push({ id: doc.id, ...doc.data() })
      })
      resolve(docs)
    })
  })
}

const addDoc = (collection, data) => {
  return new Promise((resolve) => {
    const ref = db.collection(collection).doc();
    ref.set(data).then(() => resolve(ref.id))
  })
}

const updateDoc = (collection, doc, data) => {
  return new Promise((resolve) => {
    db.collection(collection).doc(doc).update(data).then(() => resolve(true))
  })
}

const deleteDoc = (collection, doc) => {
  return new Promise((resolve) => {
    db.collection(collection).doc(doc).delete().then(() => resolve(true))
  })
}

export { getCollection, addDoc, updateDoc, deleteDoc };

