import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBR5qHLSLz3fhX2BEpgyDOg9aHOzZIMoFI",
  authDomain: "ciciliaapp-772fc.firebaseapp.com",
  projectId: "ciciliaapp-772fc",
  storageBucket: "ciciliaapp-772fc.firebasestorage.app",
  messagingSenderId: "742831132067",
  appId: "1:742831132067:web:1e5761c9b470734fa09e16",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
