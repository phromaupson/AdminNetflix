import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAuKNa_hv8Q9DgZ8-tLJ1gOCg9-Qft0ii0",
    authDomain: "netflix-9c2a2.firebaseapp.com",
    projectId: "netflix-9c2a2",
    storageBucket: "netflix-9c2a2.appspot.com",
    messagingSenderId: "307371355278",
    appId: "1:307371355278:web:c3c026859fe83a29442ddf",
    measurementId: "G-JRJTFCLEMH",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage();

export default storage;