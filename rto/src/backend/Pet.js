import { collection, addDoc, Timestamp, getDoc } from "firebase/firestore";
import { db } from './Firebase';
import { getUserDataRef } from './User';


export class Pet {
  /**
   * Constructs a pet
   * @param {User} owner - pet's owner
   * @param {string} name -pet's name
   * @param {string} sex -pet's sex (male or female)
   * @param {string} species - pet's species
   * @param {number} weight - pet's weight in pounds (lb)
   * @param {number} height - pet's height in inches
   * @param {string} color - describes the color of the pet
   * @param {string} breed - optional, pet's breed
   * @param {string[]} allergies - optional, list of pet's allergies
   * @param {string} other - optional, any other attributes of the pet
   * @param {Geopoint} location - optional, pet's most recent location in
   * latitude longitude coordinates
   * @param {string} status - either "lost", "found", or "normal"
   */
  constructor(owner, name, sex, species, weight, height, color, breed, allergies, other, location, status = "normal") {
    this.owner = owner
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
    this.status = status;

    this.lastModified = Timestamp.now();
  }

  /**
   * Persist a pet to firestore
   * @returns {Promise<Result<Pet>>} a result containing the persisted pet
   */
  async persist() {
    try {
      const petToPersist = {...this};
      petToPersist.ownerId = petToPersist.owner.uid
      delete petToPersist.owner;

      const docRef = await addDoc(collection(db, "pets"), petToPersist);
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

// Firestore data converter for Pets
const petConverter = {
  toFirestore(pet) {
    return pet;
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    // fetch owner (todo: change to be more efficient to avoid repeated reads)
    const owner = getDoc(getUserDataRef(data.ownerId))
    return new Pet(owner, data.name, data.sex, data.species,
      data.weight, data.height, data.color, data.breed, data.allergies,
      data.other, data.location, data.status, data.lastModified)
  },
}
export {petConverter};
