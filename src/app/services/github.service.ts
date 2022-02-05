import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUserDetails(userName:string){
    return this.http.get(`https://api.github.com/users/${userName}`)
  }

  getRepos(repoUrl:string){
    return this.http.get(repoUrl);
  }

  getBranches(username:string, reponame:string){
    return this.http.get(`https://api.github.com/repos/${username}/${reponame}/branches`)
  }

  getIssues(username:string, reponame:string){
    return this.http.get(`https://api.github.com/repos/${username}/${reponame}/issues`)
  }
}


// repos_url	"https://api.github.com/users/SuchitaGhadge/repos"