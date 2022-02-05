import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  @Input() user:any;
  repoUrl:any;
  repos:any = []
  userDetail:any;
  userName:any;
  constructor(private githubServices: GithubService, private ref: ChangeDetectorRef, private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log(this.user)
    this.repoUrl = this.user.repos_url
    this.userName = this.user.login
    console.log(this.repoUrl)
    this.ngOnChanges()
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
          this.ref.detectChanges();
        }
      )
    }
  }

  selectRepo(event:any){
    console.log(event)
    this.userDetail ={
      userName : this.user.login,
      repoName : event
    }
    console.log(this.userDetail)
    localStorage.setItem("userDetails", JSON.stringify(this.userDetail))
  }

 deleteRepo(event:any){
    console.log("event ",event)
    const repo = event
    console.log("userName ", this.userName)
    this.githubServices.deleteRepo(this.userName, repo).subscribe(
      (data) => {
        console.log("repo deteled", data);
      }
    ), (err:any) => {
      this.toastr.error(err)
    }
    window.location.reload()
    this.ref.detectChanges();

  }

}
