// import { Injectable } from '@angular/core';
// import { HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';

// @Injectable()
// export class ProfileService {

//   private username:string;
//   private clientid = '1e609537e8a85ccbfbd2';
//   private clientsecret = '73052f3d7cadf2246794b9e6f0591ce7114fc125';

//   constructor(private http:Http) {
//      console.log("SERVICES IS NOW READY");
//      this.username = 'kirandash';
//   }
//   getProfileInfo(){
//   	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
//   	.map((res: { json: () => any; }) => res.json());
//   }  
//   getProfileRepos(){
//   	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
//   	.map((res: { json: () => any; }) => res.json());
//   }

//   updateProfile(username:string){
//   	this.username = username;

//   }
// }
 

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
   
})

export class ProfileService {

  private username:string;
  private clientid = '1e609537e8a85ccbfbd2';
  private clientsecret = '73052f3d7cadf2246794b9e6f0591ce7114fc125';

  constructor(private http:HttpClient) { 
  	console.log("SERVICES IS NOW READY");
  	this.username = '';
  }

  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  updateProfile(username:string){
  	this.username = username;
  }

}