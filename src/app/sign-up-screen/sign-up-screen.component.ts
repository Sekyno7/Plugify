import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-sign-up-screen',
  templateUrl: './sign-up-screen.component.html',
  styleUrls: ['./sign-up-screen.component.css']
})
export class SignUpScreenComponent {
constructor(private router: Router) { }
goToLogin() {
  this.router.navigate(['/login']);
}
}
