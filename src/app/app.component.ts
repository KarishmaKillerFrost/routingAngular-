import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-intro';
//  homeRoute="home";
//  settingsRoute="settings";
routes=[
  {linkName:'home',url:'home'},
  {linkName:'settings',url:'settings'}
  
  
]

}
