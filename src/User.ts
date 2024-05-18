import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return 'Info Content!';
  }
}

export default User;
