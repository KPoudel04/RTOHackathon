import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from './Firebase';
export class Pet {
  constructor(name, sex, species, breed, weight, height, color, allergies, other, location) {
    this.name = name;
    this.sex = sex;
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.color = color;
    if (breed)
      this.breed = breed;
    if (allergies && allergies.length !== 0)
      this.allergies = allergies;
    if (other)
      this.other = other;
    if (location) 
      this.location = location;
    
    this.lastModified = Timestamp.now();
  }

  /**
   * Persist a pet to firestore
   * @returns {Promise<Result<Pet>>} a result containing the persisted pet
   */
  async persist() {
    try {
      const docRef = await addDoc(collection(db, "pets"), {...this});
      console.log("Document written with ID: ", docRef.id);
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

  uploadPicture() {
    // TODO: implement later
  }
}
