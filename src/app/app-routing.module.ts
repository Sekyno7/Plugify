import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { HomePageComponent } from './home-page/home-page.component'
import { LoginScreenComponent } from './login-screen/login-screen.component'
import { SignUpScreenComponent } from './sign-up-screen/sign-up-screen.component'
import { MainPageComponent } from './main-page/main-page.component'
import { ProfilePageComponent } from './profile-page/profile-page.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginScreenComponent },
  { path: 'signUp', component: SignUpScreenComponent},
  { path: 'mainPage', component: MainPageComponent},
  { path: 'profilePage', component: ProfilePageComponent},




]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
