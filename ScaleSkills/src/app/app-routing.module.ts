import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: 'exam', component:ExamComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
