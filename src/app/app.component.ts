import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  imgUrl = 'assets/Bridgelabz logo.jpg';
  userName: string = ''; // Two-way data binding variable
}
