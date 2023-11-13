import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
constructor(private router: Router) {}
login() {

  this.router.navigate(['/login']);
}
signUp(){
console.log("dačo");
this.router.navigate(['/signUp']);
}
}
