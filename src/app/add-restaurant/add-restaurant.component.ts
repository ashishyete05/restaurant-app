import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  addAlert:boolean=false;
  AddRestaurant= new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl('')
  })
  constructor(private commonSvc:CommonService) { }

  ngOnInit(): void {
  }

  createRestro(){
  console.log(this.AddRestaurant.value);
  this.commonSvc.addRestro(this.AddRestaurant.value).subscribe(
    (response)=>{
      console.log(response);
      this.addAlert=true;
      this.AddRestaurant.reset();
    },(error)=>{
      console.log(error);
    }
  );
  }

}
