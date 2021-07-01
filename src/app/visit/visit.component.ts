import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visit } from '../_model/visit';
import { UserService } from '../_services/user.service';



@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

  model:Visit  = new Visit();
  isSucceessful = false;
  isFailed = false;
  errorMessage = '';

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit():void {
    this.userService.createVisit(this.model).subscribe(
      data => {
        console.log(data);
        this.isSucceessful = true;
        this.isFailed = false;
        this.router.navigate(['']);
      },
      err =>{
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    );
    }

}
