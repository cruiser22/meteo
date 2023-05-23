import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) { }

  getPrevisions(latitude: number, longitude: number) {
    const url = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&timezone=auto&daily=sunrise,sunset,uv_index_max,uv_index_clear_sky_max&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,winddirection_10m,weathercode,visibility,is_day&current_weather=true`;
    return this.http.get(url);
  }
}
