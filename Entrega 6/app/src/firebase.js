import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBaMtW7nudU0Xk7oGDtV6BekwFHeqLuFLg",
    authDomain: "e-commercereact-7820d.firebaseapp.com",
    projectId: "e-commercereact-7820d",
    storageBucket: "e-commercereact-7820d.appspot.com",
    messagingSenderId: "64079886651",
    appId: "1:64079886651:web:b56bd7f96042566d509f1e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore()