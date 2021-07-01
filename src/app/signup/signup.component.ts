import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from '../_model/signup';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model:Signup  = new Signup();
  isSucceessful = false;
  isSignupFailed = false;
  errorMessage = '';

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    this.authService.register(this.model).subscribe(
      data => {
        console.log(data);
        this.isSucceessful = true;
        this.isSignupFailed = false;
        this.router.navigate(['']);
      },
      err =>{
        this.errorMessage = err.error.message;
        this.isSignupFailed = true;
      }
    );
    }

}
