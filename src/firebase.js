// Inicialización de Firebase para El precio es…
// Firebase SDK modular servido desde CDN. No contiene secretos de servidor.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAl2vw0LF5U1cKF4BfYqOwe4qc4OMb3ezg",
  authDomain: "elprecioes.firebaseapp.com",
  projectId: "elprecioes",
  storageBucket: "elprecioes.firebasestorage.app",
  messagingSenderId: "224753855656",
  appId: "1:224753855656:web:32dbede634a0b77cbc269d"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const firebaseProjectId = firebaseConfig.projectId;
