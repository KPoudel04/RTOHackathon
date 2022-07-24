export class Address {
  constructor(streetAddress, locality, state, country, postalCode) {
    this.streetAddress = streetAddress;
    this.locality = locality;
    this.state = state;
    this.country = country;
    if (postalCode)
      this.postalCode = postalCode;
  }

  asGeopoint() {
    // use API to convert
  }
}