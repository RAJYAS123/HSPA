import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { error } from 'console';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit
 {
   properties:any;

constructor(private housingService:HousingService) { }
ngOnInit(): void {
  this.housingService.getAllProperty().subscribe(
    data=>{this.properties=data;
    console.log(data);
    },
    error=>{
      console.log('httperror');
      console.log(error);
    }
  )
     
}

}
