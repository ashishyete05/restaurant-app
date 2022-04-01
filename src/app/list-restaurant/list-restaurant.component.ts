import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
  slectedId:any;
  public collection:any;
  constructor(private commonApiService: CommonService, private router:Router) {}


  ngOnInit(): void {
    this.commonApiService.getRestroList().subscribe(
      (response)=>{
        this.collection=response;
        console.log(response);
      },(error)=>{
        console.log(error);
      }
    )
  }

  delete( id:any){
   this.commonApiService.deleteRestro(id).subscribe(
     (response)=>{
       console.log("Restro with Id "+id + " deleted ");
       window.location.reload();
     },(error)=>{
      console.log(error);
     }
   ) 
  }

  selectIdFunction(id:any){
    this.slectedId = id;
    console.log(this.slectedId);
  }

}
