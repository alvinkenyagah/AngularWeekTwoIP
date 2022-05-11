import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Profile } from '../profile';

@Injectable({
  providedIn: 'root'
   
})

export class ProfileService {
  // [x: string]: any;
  private userName!:string;
  private repoName!:string;
  
  constructor(private http: HttpClient) {}
  //for github user
  getUserData(){
    return this.http.get<any[]>(`${environment.apiUrl}${this.userName}??access_token=+${atob(environment.apiKey)}`).toPromise()
  }
  getUserName(userName:string){
    this.userName = userName
  }
  //for user repositories
  getUserRepos(){
    return this.http.get<any[]>(`${environment.apiUrl}${this.userName}/repos??access_token=+${environment.apiKey}`).toPromise();
  }
  getRepos(repositories:string){
    return this.repoName = repositories
  }


  

}