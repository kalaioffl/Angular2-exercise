import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';

@NgModule ({
   imports: [ BrowserModule,FormsModule],
   declarations: [ AppComponent, FormComponent],
   bootstrap: [ AppComponent ]
})
export class AppModule { }