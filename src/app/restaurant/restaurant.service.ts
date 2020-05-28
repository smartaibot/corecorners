import {Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Restaurant} from './restaurant';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantService{
    constructor(private _httpService: Http){

    }

    getFoodMenu(): Observable<Restaurant[]>{
        return this._httpService.get("https://pizzaexpress.herokuapp.com/menu/getAll/")
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response){
        return Observable.throw(error);
    }
}