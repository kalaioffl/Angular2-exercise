import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';  
  
import { AppComponent } from './app.component';  
//import { StudentComponent } from './student/app.student'  
  
@NgModule({  
    imports: [BrowserModule],  
    declarations: [AppComponent],  
    bootstrap: [AppComponent]  
})  
export class AppModule { } 