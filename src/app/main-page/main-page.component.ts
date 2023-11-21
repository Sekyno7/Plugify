import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
   currentDate: string;
      currentTime: string;
      //todaysNameDay: string;

      ngOnInit() {
          this.updateDateTime();
          setInterval(() => this.updateDateTime(), 1000); // Aktualizuje čas každú sekundu
          //this.getTodaysNameDay();
      }

      updateDateTime() {
          const now = new Date();
            // Manuálne formátovanie dátumu
             let day = now.getDate().toString();
             let month = (now.getMonth() + 1).toString(); // January je 0
             let year = now.getFullYear().toString();

             // Pridanie vedúcej nuly ak je potrebné
             day = day.length < 2 ? '0' + day : day;
             month = month.length < 2 ? '0' + month : month;

             this.currentDate = `${day}-${month}-${year}`;
          const timeOptions = {
                   hour: '2-digit',
                   minute: '2-digit',
                   second: '2-digit',
                   timeZoneName: 'short',
                   hour12: false // Nastaví 24-hodinový formát, prípadne odstráň pre 12-hodinový formát
                                                                };
           this.currentTime = now.toLocaleTimeString([], timeOptions).split(' ')[0];
      }



constructor(private router: Router) { }
 goToProfile() {
   this.router.navigate(['/profilePage']);
 }
}
