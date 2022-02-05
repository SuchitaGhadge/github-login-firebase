import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  @Input() userDetails:any
  issues:any =[]
  constructor(private githubServices: GithubService) { }

  ngOnInit(): void {
    this.getAllIssues(this.userDetails.userName, this.userDetails.repoName)
  }

  getAllIssues(userName:any, repoName:any){
    this.githubServices.getIssues(userName, repoName).subscribe(
      (issues: any) => {
        this.issues = issues
      }
    )
  }
}
