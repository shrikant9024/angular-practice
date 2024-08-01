import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,RouterLinkWithHref],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor (private router:Router){}

  navigateRoutes(){
    this.router.navigate(['/notes'])

  }

  navigateRoutesID(id:number){
    this.router.navigate(['/notes',id])

  }
}
