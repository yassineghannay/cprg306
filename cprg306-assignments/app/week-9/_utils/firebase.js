import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyDOJfi73o7TD-nJ2bRr1A54-z8FUJb5LdY",
    authDomain: "cprg306-ac0a7.firebaseapp.com",
    projectId: "cprg306-ac0a7",
    storageBucket: "cprg306-ac0a7.firebasestorage.app",
    messagingSenderId: "953282023960",
    appId: "1:953282023960:web:677910d523db1f9bcca96d",
    measurementId: "G-NL2FTRVC0W"
  };




// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;

if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch((error) => {
    console.error("Analytics not supported:", error);
  });
}

const auth = getAuth(app); 

export { auth };