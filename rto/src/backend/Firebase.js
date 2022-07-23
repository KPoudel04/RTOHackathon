// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { User } from './User';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD06CdCpSXXOfZ3jZaQ7iiN80cA1_Xe-XM",
  authDomain: "find-my-pet-68e0c.firebaseapp.com",
  projectId: "find-my-pet-68e0c",
  storageBucket: "find-my-pet-68e0c.appspot.com",
  messagingSenderId: "45700693452",
  appId: "1:45700693452:web:e5333f2994b393b90cf169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

/* Let Result<X> type define an object of the following type:
  {
    val: X,
    status: string?
  }
  val holds the actual result, status is undefined unless there is a status message returned,
  usually an error message
*/

/**
 * Registers a user in firebase
 * @param {string} name - user's name
 * @param {string} email - user's email
 * @param {string} password - user's password
 * @return {Promise<Result<User>>} a result consisting of the user if created
 * and a status message containing any error message (or "success" in case of success)
 */
export async function registerUser(name, email, password) {
  const validUser = validUserRegistration(name, email, password);
  if (validUser.val) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        const user = new User(name, email);
        return user.persist(userCredential.user.uid);
      })
      .then((persistResult) => {
        return {
          val: persistResult.val,
          status: persistResult?.status
        }
      })
      .catch((error) => {
        // Error from firebase auth
        const errorCode = error.code;
        const errorMessage = error.message;
        // possible error code ref: https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#createuserwithemailandpassword
        // TODO: ideally, make the error message more user friendly based on error code
        return {
          val: null,
          status: errorMessage
        }
      });
  } else {
    return {
      val: null,
      status: validUser.status
    }
  }
}

const MIN_PASSWORD_LENGTH = 6
/** Returns Result<boolean> */
function validUserRegistration(name, email, password) {
  // TODO: add checks for valid email, etc.
  if (password.length >= MIN_PASSWORD_LENGTH) {
    return {
      val: true
    };
  } else {
    return {
      val: false,
      status: `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`
    }
  }
}

export async function signInUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in with auth
      const userId = userCredential.user.uid;
      return getDoc(doc(db, "users", userId));  // get snapshot of user data from firestore
    })
    .then((docSnap) => {
      if (docSnap.exists()) {
        return {
          val: docSnap.data
        }
      } else {
        // reaching here means the user can sign in but they don't have any data stored in firestore,
        // which should be impossible
        return {
          val: null,
          status: `No user is stored with account id: ${docSnap.id}`
        }
      }
    })
    .catch((error) => {
      // Error from firebase auth
      const errorCode = error.code;
      const errorMessage = error.message;
      // possible error code ref: https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinwithemailandpassword
      // TODO: ideally, make the error message more user friendly based on error code
      return {
        val: null,
        status: errorMessage
      }
    });
}
