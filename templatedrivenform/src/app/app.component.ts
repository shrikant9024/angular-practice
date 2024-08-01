import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule,NgForm} from '@angular/forms'


interface User{
  name:string,
  email:string,
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'templatedrivenform';


  user:User={
    name:'',
    email:'',
  }

  submitForm(form:NgForm){
    if(form.valid){
      console.log(form.value, this.user)
    }
  }

  validateEmail():boolean{
    const emailRegex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    return emailRegex.test(this.user.email)


  }
}
