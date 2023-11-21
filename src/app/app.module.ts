import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { SignUpScreenComponent } from './sign-up-screen/sign-up-screen.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component'
import { GoogleMapsModule } from '@nativescript/google-maps/angular';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, GoogleMapsModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent, HomePageComponent, MyComponentComponent, BottomNavigationComponent, LoginScreenComponent, SignUpScreenComponent, MainPageComponent, ProfilePageComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
