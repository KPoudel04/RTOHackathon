import { Geopoint } from './Geopoint';
import { Address } from './Address';

// yes i know this is bad practice
// in perfect world, would do all of this on serverside using cloud functions
const GEOAPIFY_KEY = "34135c6dfbd64cfcb9577964489b1f37";

export function addressToGeopoint(address) {
  if (!address) {
    return null;
  }

  const requestOptions = {
    method: 'GET',
  };

  const strAddress = Address.asString(address)
  const reg = /[\s]+/g
  const urlAddress = encodeURIComponent(strAddress)
  console.log({ strAddress })
  console.log({ urlAddress })

  const url = `https://api.geoapify.com/v1/geocode/search?text=${urlAddress}&apiKey=${GEOAPIFY_KEY}`
  
  return fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      const lon = result.features[0].properties.lon
      const lat = result.features[0].properties.lat
      const geopoint = new Geopoint(lat, lon);
      console.log({ geopoint })
      return geopoint;
    })
    .catch(error => console.log('error', error));
}
