import { doc, setDoc, collection, query, where } from "firebase/firestore"; 
import { db } from './Firebase';

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
      this.homeCoordinates = User.convertAddressToCoordinates(homeAddress)
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
      delete userToPersist.uid;

      await setDoc(doc(db, "users", this.uid), userToPersist);
      console.log("Document written with ID: ", this.uid, "; name: ", this.name);
      return {
        val: this
      }
    } catch (e) {
      console.error("Error adding document: ", e);
      return {
        val: null,
        status: "Not a valid document"
      }
    }
  }

  /** Returns a query that is used to get a user's pets.
   * Use Firestore's "onSnapshot" function to retrieve real-time data.
   * https://firebase.google.com/docs/firestore/query-data/listen?hl=en&authuser=0#listen_to_multiple_documents_in_a_collection
   */
  get petsQuery() {
    // query firestore for pets who are owned by this user
    return query(collection(db, "pets"), where("ownerId", "==", this.uid))
  }

  static convertAddressToCoordinates(homeAddress) {
    
  }
}