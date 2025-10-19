// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 🔹 Configurações do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBR5qHLSLz3fhX2BEpgyDOg9aHOzZIMoFI",
  authDomain: "ciciliaapp-772fc.firebaseapp.com",
  projectId: "ciciliaapp-772fc",
  storageBucket: "ciciliaapp-772fc.firebasestorage.app",
  messagingSenderId: "742831132067",
  appId: "1:742831132067:web:1e5761c9b470734fa09e16",
};

// 🔹 Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// 🔹 Inicializa e exporta o Auth
const auth = getAuth(app);

export { auth };
