import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBnyRjw56zsWYKEr0SCf-F7gRHSwiqm3Tw",
  authDomain: "blogdevg.firebaseapp.com",
  projectId: "blogdevg",
  storageBucket: "blogdevg.appspot.com",
  messagingSenderId: "984463997672",
  appId: "1:984463997672:web:f514369d12a0aa899da75d",
  measurementId: "G-9Y93CKK8P7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);