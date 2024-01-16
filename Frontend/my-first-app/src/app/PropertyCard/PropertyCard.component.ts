import { Component } from "@angular/core";

@Component({
    selector:'app-property-card',
    templateUrl:'PropertyCard.component.html',
    styleUrls:['PropertyCard.component.css']
})

export class PropertyCard
{
 Property:any={
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
 }
}