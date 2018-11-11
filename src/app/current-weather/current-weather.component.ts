import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from '../icurrent-weather'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.sass'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService
      .getCurrentWeather('London', 'UK')
      .subscribe(data => (this.current = data))
  }
}
