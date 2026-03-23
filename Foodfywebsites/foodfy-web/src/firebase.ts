import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// IMPORTANTE: El usuario deberá completar estas claves en su consola de Firebase
// Por ahora dejamos una estructura preparada
const firebaseConfig = {
    apiKey: "AIzaSy...",
    authDomain: "foodfy-web.firebaseapp.com",
    projectId: "foodfy-web",
    storageBucket: "foodfy-web.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

