import { Component } from '@angular/core';
import { Product } from './product';

@Component ({
   selector: 'product-form',
   templateUrl: './form.component.html'
})

export class FormComponent {
   model = new Product(1,'ProductA');
}