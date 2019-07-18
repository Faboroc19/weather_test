import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CelsiusPipe } from './pipes/celsius.pipe';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HoursComponent } from './components/weather/hours/hours.component';
import { CitiesComponent } from './components/weather/cities/cities.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CelsiusPipe,
    HoursComponent,
    CitiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
