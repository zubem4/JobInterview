import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'JobInterview';
  enteredText = 'write something in the input field to change this label';
  onInputChange(event: any): void{
    this.enteredText = event.target.value;
    if (this.enteredText === ''){
      this.enteredText = 'write something in the input field to change this label';
    }
  }
}
