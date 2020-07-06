import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [  
  { path: '', redirectTo: '/Login', pathMatch: 'full' }, 
  { path: 'list', component: ListComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Add/:id', component: AddComponent },
  { path: 'View/:id', component: ViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
