import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoDetailsRoutingModule } from './repo-details-routing.module';
import { DisplayDataComponent } from './display-data/display-data.component';
import { BranchesComponent } from './branches/branches.component';
import { IssuesComponent } from './issues/issues.component';


@NgModule({
  declarations: [
    DisplayDataComponent,
    BranchesComponent,
    IssuesComponent
  ],
  imports: [
    CommonModule,
    RepoDetailsRoutingModule
  ]
})
export class RepoDetailsModule { }
