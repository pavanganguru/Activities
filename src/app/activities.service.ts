import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  public API_URL="https://www.boredapi.com/api/activity"
  constructor(private http : HttpClient) { }

 getactivities() {
   return this.http.get(this.API_URL)
 }
}
