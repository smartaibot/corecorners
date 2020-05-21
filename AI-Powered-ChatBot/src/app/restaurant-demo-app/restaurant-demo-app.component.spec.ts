import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDemoAppComponent } from './restaurant-demo-app.component';

describe('RestaurantDemoAppComponent', () => {
  let component: RestaurantDemoAppComponent;
  let fixture: ComponentFixture<RestaurantDemoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantDemoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDemoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
