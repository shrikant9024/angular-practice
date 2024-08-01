import { CurrencyPipe, DatePipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppendPipe } from './pipes/append.pipe';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe,PercentPipe,AppendPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ControlFlow';

  a:number=3
  b:number=7

  items=[
    {id:1,name:'item1'},
    {id:2,name:'itemw'},
    {id:3,name:'item3'},
    



  ]
  today:number=Date.now()

  currency:number=1.1234
  value:string="hello this is"
}
