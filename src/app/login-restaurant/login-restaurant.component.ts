import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login-restaurant',
  templateUrl: './login-restaurant.component.html',
  styleUrls: ['./login-restaurant.component.css']
})
export class LoginRestaurantComponent implements OnInit {

  username:any;
  password:any;

  constructor(private commonSvc:CommonService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.username);
    if(this.username == "Ashish" && this.password == "123456"){
      this.router.navigateByUrl('/list');
    }else{
      alert("Please Enter Valid Details");
    }
  }

  logiReset(){
    this.username='';
    this.password=''; 
  }

}
