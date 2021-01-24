import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { StudentsPiplinePipe } from './students/students-pipline.pipe';
import { PostsComponent } from './posts/posts.component';
import { from } from 'rxjs';
import { PostsService } from './posts/posts.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    StudentsComponent,
    StudentDetailComponent,
    StudentsPiplinePipe,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
