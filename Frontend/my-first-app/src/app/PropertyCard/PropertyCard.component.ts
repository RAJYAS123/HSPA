import { Component, Input } from "@angular/core";

@Component({
    selector:'app-property-card',
    templateUrl:'PropertyCard.component.html',
    styleUrls:['PropertyCard.component.css']
})

export class PropertyCard
{
    @Input() property :any
   
}