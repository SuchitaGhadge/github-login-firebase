import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  @Input() repoUrl:string | undefined;
  repos:any = []

  constructor(private githubServices: GithubService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    if(this.repoUrl){
      this.githubServices.getRepos(this.repoUrl).subscribe(
        (repos:any) => {
          this.repos = repos;

          this.ref.detectChanges();
        },
        (error) => {
          console.log("Error...", error)
        }
      )
    }else{

    }
  }

}
