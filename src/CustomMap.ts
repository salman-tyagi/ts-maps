import User from './User';
import Company from './Company';

class CustomMap {
  googleMap: google.maps.Map;

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divID) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  //   NOT WORKING
  //   renderUserMarker(user: User): void {
  //     new google.maps.marker.AdvancedMarkerElement({
  //       map: this.googleMap,
  //       position: {
  //         lat: user.location.lat,
  //         lng: user.location.lng,
  //       },
  //     });
  //   }

  /* BAD CODE
  renderUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  renderCompanyMarker(company: Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  }
  */

  addMarker(obj: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: obj.location.lat,
        lng: obj.location.lng,
      },
    });
  }
}

export default CustomMap;
