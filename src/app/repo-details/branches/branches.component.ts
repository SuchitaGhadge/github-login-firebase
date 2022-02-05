import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  @Input() userDetails:any
  branches:any =[]
  constructor(private githubServices: GithubService) { }

  ngOnInit(): void {
    this.getAllBranches(this.userDetails.userName, this.userDetails.repoName)
  }
  
  async getAllBranches(userName:any, repoName:any){
    await this.githubServices.getBranches(userName, repoName).subscribe(
      (branches: any) => {
        this.branches = branches;
        console.log(this.branches)
      }
    )
  }
}
