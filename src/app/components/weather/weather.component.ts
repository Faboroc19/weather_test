import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http-service/http.service';
import { ApiConstants } from '../../util/api.constants';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  endPoint = ApiConstants.URL_SERVICES;
  apiKey = ApiConstants.API_KEY;
  cities = [];
  city = [];
  cityName = '';
  img;
  viewMoreInfo = false;

  // https://samples.openweathermap.org/data/2.5/forecast?id=3688689&appid=65ba81deb683ad6d035fb79548b480fd

  constructor( private httpService: HttpService ) { }

  ngOnInit() {

    const object = ApiConstants.CITYES;
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const element = object[key];
        const urlServices = `${ this.endPoint }id=${ element }&appid=${ this.apiKey }`;
        this.httpService.requestGET(urlServices)
          .toPromise()
          .then(response => {
            this.cities = this.cities.concat(response);
            console.log(this.cities);
          })
          .catch(err => {
            console.log('Error: ' + err );
          });

      }
    }
  }

  viewMore( event ) {
    this.viewMoreInfo = true;
    console.log('item', event);
    this.cityName = event.city.name;
    this.city = event.list;
  }

}
