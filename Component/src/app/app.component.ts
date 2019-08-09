import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
   template: ` <div>
      <h1>{{appTitle}}</h1>
      <div>Angular 2 Basic exercise</div>
   </div> `,
})

export class AppComponent {
   appTitle: string = 'Welcome';
}