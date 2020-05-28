import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatModule } from './chat/chat.module';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Http, HttpModule } from '@angular/http';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantService } from './restaurant/restaurant.service';
import { CommonModule} from '@angular/common';

@NgModule({
  declarations: [AppComponent, ChatBoxComponent, HomeComponent, RestaurantComponent],
  imports: [BrowserModule, FormsModule, ChatModule, HttpModule, CommonModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'restaurant', component: RestaurantComponent},
    ])
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent],
})
export class AppModule {}