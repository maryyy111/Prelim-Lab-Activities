import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',

})
export class DataBinding {
  message = 'Data Binding Demonstration';
  title = 'My First App!';
  description = 'This is my new Angular Application';
  imageUrl = '../assets/logo-angular.png';
  w = 50;
  h = 50;
  altText = 'Angular Logo';
  textColor = 'blue';
  isHighlighted = true;
  yourName='';

  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
