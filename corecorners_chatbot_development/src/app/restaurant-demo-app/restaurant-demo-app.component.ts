import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-restaurant-demo-app',
  templateUrl: './restaurant-demo-app.component.html',
  styleUrls: ['./restaurant-demo-app.component.css']
})
export class RestaurantDemoAppComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef){

  }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#81aedf';
  }
  

}
