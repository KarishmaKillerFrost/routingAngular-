import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent  {

routes=[  {linkName:'profile',url:'profile'},
{linkName:'contact',url:'contact'}]

}
