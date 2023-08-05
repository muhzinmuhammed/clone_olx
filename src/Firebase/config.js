import firbase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcSYvNyA8CmMJ2wXFXzdWp6n4d7xIf2Jo",
    authDomain: "olx-clone-3db8a.firebaseapp.com",
    projectId: "olx-clone-3db8a",
    storageBucket: "olx-clone-3db8a.appspot.com",
    messagingSenderId: "254966506912",
    appId: "1:254966506912:web:688d8408e835307fc2b0c5",
    measurementId: "G-THQ62Y49ZJ"
  };
export default firbase.initializeApp(firebaseConfig)
  