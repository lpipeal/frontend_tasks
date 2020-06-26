import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/page/header/header.component';
import { FooterComponent } from './components/page/footer/footer.component';
import { TaskComponent } from './components/task/components/task.component';
import { TaskService } from './components/task/service/task.service';

import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
