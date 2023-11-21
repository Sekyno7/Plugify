import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
constructor(private router: Router) { }
  goToRegister() {
  this.router.navigate(['/signUp']);
}
goToMainPage() {
  this.router.navigate(['/mainPage']);
}
