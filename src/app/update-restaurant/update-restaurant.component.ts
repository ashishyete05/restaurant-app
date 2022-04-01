import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  updateAlert:boolean=false;
  EditRestaurent = new FormGroup({
    name :  new FormControl(''),
    address : new FormControl(''),
    email : new FormControl(''),
    mobile: new FormControl('')
  })

  constructor(private commonSvc: CommonService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.commonSvc.getRestoDataUsingId(this.route.snapshot.params.id).subscribe(
      (response) =>{
        console.log(response);
        this.EditRestaurent= new FormGroup({
          name :  new FormControl(response['name']),
          address : new FormControl(response['address']),
          email : new FormControl(response['email']),
          mobile: new FormControl(response['mobile'])
        });
      },(error)=>{
        console.log(error);
      }
    )
}

updateRestaurant(){
  this.commonSvc.updateRestro(this.route.snapshot.params.id,this.EditRestaurent.value).subscribe(
    (response)=>{
      console.log(response);
      this.EditRestaurent.reset();
      this.updateAlert=true;
    },(error)=>{
      console.log(error);
    }
  )
}

}