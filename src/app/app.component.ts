import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  imgUrl = 'assets/Bridgelabz logo.jpg';
  userName: string = '';
  
  // Getter to validate name input
  get isValidName(): boolean {
    return /^[A-Z][a-zA-Z]{2,}$/.test(this.userName);
  }
}
