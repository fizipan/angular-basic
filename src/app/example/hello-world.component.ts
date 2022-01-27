import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styles: [
    `
      h2 {
        font-size: 40px;
        font-weight: bold;
        font-family: sans-serif;
      }
    `,
  ],
})
export class HelloWorldComponent {
  fontColor = 'red';
  sayHelloId = 1;
  // canClick = false;
  canEdit = false;
  message = "I'm read only!";

  // sayMessage() {
  //   alert(this.message);
  // }

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }
}
