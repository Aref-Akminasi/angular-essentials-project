import { Component, computed, EventEmitter, Input, Output, output } from '@angular/core';

// type User = {
//     avatar:string;
//     id: string;
//     name:string;
// };

interface User {
  avatar:string;
  id: string;
  name:string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  @Input({required: true}) user!:User; 
  @Output() select = new EventEmitter<string>();
  
  
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}