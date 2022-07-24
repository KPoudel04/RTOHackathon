export class Geopoint {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  async asAddress() {
    // use API to convert
  }
}