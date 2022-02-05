import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  data:any;
  userDetails: any
  constructor(private githubServices: GithubService) { }

  ngOnInit(): void {
    if(localStorage){
      this.data = localStorage.getItem('userDetails')
      console.log("user details", this.data);
      this.userDetails = JSON.parse(this.data)
    }
  }

}
