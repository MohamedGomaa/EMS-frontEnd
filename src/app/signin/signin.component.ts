import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signin } from '../_model/signin';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  model: Signin = new Signin();

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService:AuthService,private tokenStorageService: TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    if(this.tokenStorageService.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
    }
  }

  onSubmit():void{
    this.authService.logIn(this.model).subscribe(
      data =>{
        this.tokenStorageService.saveToken(data.accessToken);
        this.tokenStorageService.saveUser(data);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.roles = this.tokenStorageService.getUser().roles;
        this.router.navigate(['/profile']);
      },
      err =>{
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }


}
