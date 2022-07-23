export class Pet {
  constructor(name, sex, species, breed, weight, height, color, allergies, other) {
    this.name = name;
    this.sex = sex;
    this.species = species;
    this.breed = breed;
    this.weight = weight;
    this.height = height;
    this.color = color;
    this.allergies = allergies;
    this.other = other;
  }

  /**
   * Persists this pet to firestore
   */
  persist() {
    // TODO
  }

  uploadPicture() {
    // TODO: implement later
  }
}