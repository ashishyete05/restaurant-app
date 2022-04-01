import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})
export class RegisterRestaurantComponent implements OnInit {

  registerAlert:boolean=false;
    CreateUser= new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private commonSvc:CommonService) { }

  ngOnInit(): void {
   
  }

  createUser(){
    this.commonSvc.createUser(this.CreateUser.value).subscribe(
      (response)=>{
        console.log(response);
        this.CreateUser.reset();
        this.registerAlert=true;
      },(error)=>{
        console.log(error);
      }
    )
  }

}
