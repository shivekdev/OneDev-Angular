import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { PostsComponent } from './posts/posts.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'person', component:PersonComponent},
  {path:'student', component:StudentsComponent},
  {path:'student-detail/:studentID', component:StudentDetailComponent},
  {path:'posts', component:PostsComponent},
  {path: '', redirectTo:"person", pathMatch:'full' },
  {path: '*', redirectTo:"person" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
