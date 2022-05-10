import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from 'src/app/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit { 
  repos!: any;
  myProfile! : any;
  userName:string='';
  constructor(private profileService:ProfileService){}
 searchUser(){
   this.profileService.getUserName(this.userName)
   this.profileService.getUserData().then( (user: any)=>{
     this.myProfile=user;
    })
  }
  ngOnInit():void{
  this.searchUser();
  }

 

}
