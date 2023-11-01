import { Component } from '@angular/core';

@Component({
  selector: 'ns-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.css']
})
export class BottomNavigationComponent {
onTabTap(tabNumber: number) {
    console.log('Tab', tabNumber, 'tapped');

  }
}
