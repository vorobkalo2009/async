const BASE_URL = 'https://restcountries.com/v3.1/';

// const URL_PARAMS = '?fields=name,flags,languages&languages=ukrainian';

export default class NewClass {
  constructor() {
    this.value = '';
  }

  fetchCountries() {
    return fetch(`${BASE_URL}name/${this.value}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(err => console.log(err.status));
  }

  get val() {
    return this.value;
  }

  set val(newValue) {
    this.value = newValue;
  }
}
