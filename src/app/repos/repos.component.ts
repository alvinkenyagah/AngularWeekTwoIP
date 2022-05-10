import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos :any;
  userName!: string;

  constructor(private profileService:ProfileService) { }

  getUserRepositories(){
    this.profileService.getUserName(this.userName);
    this.profileService.getUserRepos().then( (repos: any)=> {
      this.repos = repos;
    })
  }

  ngOnInit(): void {
    this.getUserRepositories();
  }

}
