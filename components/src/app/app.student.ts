import { Component } from "@angular/core"  
  
//decorater declaration  
@Component({  
  
    selector: 'my-student',  
    templateUrl : 'app.student.html'  
      
})  
  
 //class creation   
export class StudentComponent {  
    firstName: string = "Kalaivani";  
    lastName: string = "devadas";  
    gender: string = "female";  
    qualification: string = "BE";  
} 