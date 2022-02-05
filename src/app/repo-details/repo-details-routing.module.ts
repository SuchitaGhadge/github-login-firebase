import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { BranchesComponent } from './branches/branches.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { IssuesComponent } from './issues/issues.component';
const routes: Routes = [
  {
    path: 'branches',
    component: BranchesComponent
  },
  {
    path: 'issues',
    component: IssuesComponent
  },
  {
    path: 'display-data',
    component: DisplayDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepoDetailsRoutingModule { }
