export class User {
  constructor(name, email, homeAddress, phone1, phone2) {
    this.name = name;
    this.email = email;
    this.homeAddress = homeAddress;
    this.phone1 = phone1;
    this.phone2 = phone2;
  }

  /**
   * Persist this user to firestore
   */
  async persist() {
    // TODO
    return {
      val: true,
      status: "success"
    }
  }

  convertAddressToCoordinates(homeAddress) {
    
  }
}