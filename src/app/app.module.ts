import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/page/header/header.component';
import { FooterComponent } from './components/page/footer/footer.component';
import { TaskComponent } from './components/task/components/task.component';
import { TaskService } from './components/task/service/task.service';

import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './components/task/components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskComponent,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule

  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
