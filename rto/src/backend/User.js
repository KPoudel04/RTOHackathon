import { doc, setDoc } from "firebase/firestore"; 
import { db } from './Firebase';

export class User {
  constructor(name, email, homeAddress, phone1, phone2) {
    this.name = name;
    this.email = email;
    if (homeAddress){
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
  async persist(uid) {
    try {
      await setDoc(doc(db, "users", uid), {...this});
      console.log("Document written with ID: ", uid);
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

  static convertAddressToCoordinates(homeAddress) {
    
  }
}