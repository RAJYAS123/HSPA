import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }

getAllProperty()
{
  return this.http.get('data/properties.json');
}

getById()
{
  return this.http.get('data/properties');
}

}




