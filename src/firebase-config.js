import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDTqDeK7GC-JcJMcLOMm7jBSfzfPIS06s8",
    authDomain: "ecommerce-cf2ea.firebaseapp.com",
    projectId: "ecommerce-cf2ea",
    storageBucket: "ecommerce-cf2ea.appspot.com",
    messagingSenderId: "426229649978",
    appId: "1:426229649978:web:8fbd23515cee19da53db03",
    measurementId: "G-G7Q49QXKC2"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
