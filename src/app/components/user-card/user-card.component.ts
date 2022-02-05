import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from "@angular/forms"
import { GithubService } from 'src/app/services/github.service';
import { ToastrService } from 'ngx-toastr';
import { windowWhen } from 'rxjs';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  closeResult = '';
  @Input() user:any;
  constructor(private modalService: NgbModal, private githubServices: GithubService , private toastr: ToastrService) { }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }

  createRepo(f:NgForm){
    const {repoName} = f.form.value
    console.log(repoName)
    const data = {
      name : repoName
    }

     this.githubServices.createRepo(data).subscribe(
      (repoData:any) => {
        console.log(repoData)
        this.toastr.success("Repo Created successfully")
        
      }
    ), (error:any) => {
      this.toastr.error("Repo creation failed", error)
    }

  }
}
