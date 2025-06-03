import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
standalone: true,
imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['../main/main.component.css']

})
export class ProjectsComponent {

 projects = [
  { name: 'Client_Server', description: 'A project demonstrating socket communication via WinSocketChat.', link: 'https://github.com/krapXXX/Client_Server/tree/main/WinSocketChat' },
  { name: 'System_Programming', description: 'Contains the TicTacToe game project under System_Programming.', link: 'https://github.com/krapXXX/System_Programming/tree/master/TicTac' },
  { name: 'OOP', description: 'Features the AmericanBase project focused on object-oriented programming.', link: 'https://github.com/ArynaKrapivna/AmericanBase' },
  { name: 'HTML/CSS', description: 'Final project for web layout and design using HTML and CSS.', link: 'https://krapxxx.github.io/final-/' },
  { name: 'JS', description: 'JavaScript final project demonstrating DOM manipulation.', link: 'https://krapxxx.github.io/JS-fin/' },
  { name: 'Angular', description: 'Angular-based clone of a landing.', link: 'https://github.com/' },
  { name: 'Wokwi', description: 'TicTacToe in Wokwi(C++). Collaborated in a team of 4 with designers and developers; won 1st place at the university level.', link: 'https://www.canva.com/design/DAGGmzvpiVA/yeVg0WbRi_IZA2DhlQKu5g/edit' },
  { name: 'GitHub', link: 'https://github.com/ArynaKrapivna' }
];
}
