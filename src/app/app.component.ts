import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  imgUrl = 'assets/Bridgelabz logo.jpg'; // Image source

  // Method to open BridgeLabz website in a new tab
  openBridgeLabzSite() {
    window.open('https://www.bridgelabz.com', '_blank');
  }
}
