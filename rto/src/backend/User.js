import { doc, setDoc, collection, query, where, updateDoc } from "firebase/firestore"; 
import { db } from './Firebase';
import { petConverter } from './Pet';
import { Address } from './Address';

export class User {
  /**
   * Construct a user
   * @param {string} uid - user's unique id, determined by firebase auth upon sign up
   * @param {string} name - user's first and last name
   * @param {string} email - user's email
   * @param {Address} homeAddress - optional, user's home address
   * @param {string} phone1 - optional, user's primary phone number
   * @param {string} phone2 - optional, user's secondary phone number
   */
  constructor(uid, name, email, homeAddress, phone1, phone2) {
    this.uid = uid;
    this.name = name;
    this.email = email;
    if (homeAddress) {
      this.homeAddress = homeAddress;
      this.homeCoordinates = homeAddress.asGeopoint()
    }
    if (phone1)
      this.phone1 = phone1;
    if (phone2)
      this.phone2 = phone2;
  }

  /**
   * Persist a user to firestore
   * @param {string} uid - the user's unique identifier 
   * @returns {Promise<Result<User>>} a result containing the persisted user
   */
  async persist() {
    try {
      const userToPersist = {...this};
      // delete userToPersist.uid;

      await setDoc(getUserDataRef(this.uid), userToPersist);
      console.log("Document written with ID: ", this.uid, "; name: ", this.name);
      return {
        val: this
      };
    } catch (e) {
      console.error("Error adding document: ", e);
      return {
        val: null,
        status: "Not a valid document"
      };
    }
  }

  
  /** Returns a query that is used to get a user's pets.
   * Use Firestore's "onSnapshot" function to retrieve real-time data.
   * https://firebase.google.com/docs/firestore/query-data/listen?hl=en&authuser=0#listen_to_multiple_documents_in_a_collection
   */
  get petsQuery() {
    // query firestore for pets who are owned by this user
    return query(collection(db, "pets"), where("ownerId", "==", this.uid)).withConverter(petConverter);
  }

  /**
   * Updates a user, persisting changes to firestore
   * @param {User} param0 - the updated user object. ignores uid and email fields
   * @returns {Promise<Result<boolean>>} a result containing true if operation succeeded
   */
  async update({name, homeAddress, phone1 = "", phone2 = ""}) {
    console.log("updating user ", name);
    try {
      await updateDoc(getUserDataRef(this.uid), {...{name, homeAddress, phone1, phone2}})
      return {
        val: true
      };
    } catch (e) {
      return {
        val: false,
        status: `Update failed. User with id ${this.uid} might not exist in firestore. ${e}`
      };
    }
  }
}


// Firestore data converter for User
const userConverter = {
  toFirestore(user) {
    const userToPersist = user;
    delete userToPersist.uid;
    return userToPersist;
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    // these lines necessary to ensure homeAddress is created properly. otherwise, funcs be missing
    let homeAddress;
    if (data.homeAddress) {
      const {streetAddress, locality, state, country, postalCode} = data.homeAddress;
      homeAddress = new Address(streetAddress, locality, state, country, postalCode);
    }

    return new User(snapshot.id, data.name, data.email, homeAddress, data.phone1, data.phone2)
  },
}

export function getUserDataRef(userId) {
  return doc(db, 'users', userId).withConverter(userConverter)
}