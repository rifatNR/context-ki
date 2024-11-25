// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4ByB3Y9AgOEWxH4kPEoeHd5Zdh_dUVFY",
    authDomain: "draftbase26344.firebaseapp.com",
    projectId: "draftbase26344",
    storageBucket: "draftbase26344.firebasestorage.app",
    messagingSenderId: "919332088858",
    appId: "1:919332088858:web:dd8effe1c56dfe73fdb5a3",
    measurementId: "G-5KN23SGN9Q",
};

// Initialize Firebase
const app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
// let app;
// if (!getApps().length) {
//     app = initializeApp(firebaseConfig);
// } else {
//     app = getApps()[0];
// }

// Initialize Auth
export const auth = getAuth(app);

// Initialize Analytics only on client side
// const analytics = getAnalytics(app);
let analytics;
if (typeof window !== "undefined") {
    // Dynamic import for analytics to avoid SSR issues
    import("firebase/analytics").then((module) => {
        analytics = module.getAnalytics(app);
    });
}
