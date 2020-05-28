import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant';
import { RestaurantService} from './restaurant.service';
import { from } from 'rxjs';
 
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  menu : Restaurant[];
  constructor(private _restaurantService: RestaurantService){

  }
  getMenu(): void{
    this._restaurantService.getFoodMenu()
      .subscribe((foodMenu) => {
          this.menu =foodMenu, 
          console.log(foodMenu)
      }, (error) => {
          console.log(error);
      });
  }

  ngOnInit(): void {
    this.getMenu();
  }

}
