import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { RestaurantDemoAppComponent } from './restaurant-demo-app/restaurant-demo-app.component';
import { ChatModule } from './chat/chat.module';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, ChatBoxComponent, RestaurantDemoAppComponent, HomeComponent],
  imports: [BrowserModule, FormsModule, ChatModule, 
    RouterModule.forRoot([
      {path:'', component: AppComponent},
      {path:'restaurant', component: RestaurantDemoAppComponent}])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}