import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `<div>
              <h1>Company name: ${this.companyName}</h1>
              <h3>Catchphrase: ${this.catchPhrase}</h3>
            </div>`;
  }
}

export default Company;
