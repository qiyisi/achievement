import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOWfAIHwj96eNfvmnjXkD3A9EXAZDQbk0",
  authDomain: "daily-qiyisi.firebaseapp.com",
  databaseURL: "https://daily-qiyisi.firebaseio.com",
  projectId: "daily-qiyisi",
  storageBucket: "daily-qiyisi.appspot.com",
  messagingSenderId: "618683222833",
  appId: "1:618683222833:web:e98f724d485fb6406dbe10",
};

const db = firebase.initializeApp(firebaseConfig).firestore();

const getCollection = (collection) => {
  return new Promise((resolve) => {
    const docs = [];
    db.collection(collection)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          docs.push({ id: doc.id, ...doc.data() });
        });
        resolve(docs);
      });
  });
};

const addDoc = (collection, data) => {
  return new Promise((resolve) => {
    const ref = db.collection(collection).doc();
    ref.set(data).then(() => resolve(ref.id));
  });
};

const updateDoc = (collection, doc, data) => {
  return new Promise((resolve) => {
    db.collection(collection)
      .doc(doc)
      .update(data)
      .then(() => resolve(true));
  });
};

const deleteDoc = (collection, doc) => {
  return new Promise((resolve) => {
    db.collection(collection)
      .doc(doc)
      .delete()
      .then(() => resolve(true));
  });
};

export { getCollection, addDoc, updateDoc, deleteDoc };
