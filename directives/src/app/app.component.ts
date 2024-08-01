import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf,NgFor,NgSwitch,NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,NgFor,NgSwitch,NgSwitchCase],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives';


  isLoggedIn:boolean=true
  check:boolean= true
  username:string="shrikant"

  namesArray:string[]=['delhi','bengaluru','pune']
  grade:string= 'C'
}
