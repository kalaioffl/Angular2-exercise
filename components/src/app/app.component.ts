import { Component } from "@angular/core";  
  
@Component({  
  
    selector: 'my-App',  
    template: `  
    <div>  
    <h1>{{pageheader}}</h1>  
    </div>  
     <my-student></my-student>  
                `,  
  
})  
  
export class AppComponent {  
    pageheader: string = "Student Details"  
}