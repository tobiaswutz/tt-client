import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ttclient';

  constructor(public http: HttpClient) { }

  public call() {
    console.log('call');

    this.http.get('https://api.example.com/data').subscribe(
      (response) => {
        console.log('Response:', response);
        // Hier kannst du die weiteren Aktionen mit der Response durchführen
      },
      (error) => {
        console.error('Fehler beim Abrufen der Daten:', error);
      }
    );
  }
}
