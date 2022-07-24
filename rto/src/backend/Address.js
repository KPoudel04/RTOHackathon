import { addressToGeopoint } from './Geoapify';

export class Address {
  constructor(streetAddress, locality, state, country, postalCode) {
    this.streetAddress = streetAddress;
    this.locality = locality;
    this.state = state;
    this.country = country;
    if (postalCode)
      this.postalCode = postalCode;
  }

  static asString(add) {
    return `${add.streetAddress} ${add.locality} ${add.state} ${add.postalCode ?? ""} ${add.country}`
  }

  async asGeopoint() {
    // use API to convert
    return await addressToGeopoint(this);
  }
}