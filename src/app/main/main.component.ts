import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ обов’язково

@Component({
  selector: 'app-main',
  standalone: true, // ✅ обов’язково для використання без NgModule
  imports: [CommonModule], // ✅ потрібен для *ngIf, *ngFor
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  user = {
    name: 'Arina Krapivna',
    role: 'Web Developer',
    location: 'Odesa, Ukraine 65000',
    email: 'arina.krapivnaya@gmail.com',
    phone: '+380661937598',
    git: 'https://github.com/ArynaKrapivna',
    linkedin:'https://www.linkedin.com/in/aryna-krapivna-b93407334/',
    photo: '/photo.jpg',
  };

aboutMe = `
I’m a Front-End Developer passionate about crafting intuitive and responsive web interfaces using HTML, CSS, and JavaScript. I enjoy translating ideas into digital experiences, ensuring both functionality and aesthetics in every project.\n\n

My skillset includes strong knowledge of C++, system programming, and tools like Visual Studio, Photoshop, and Git. I have experience building applications both individually and collaboratively — including games, dynamic classes, and web solutions.<br><br>

Currently, I’m a second-year student at IT STEP University in Odesa, where I continuously develop my technical expertise and soft skills like teamwork, public speaking, and analytical thinking.<br><br>

I’m open to opportunities where I can contribute to impactful projects, collaborate with creative teams, and continue growing as a developer.
`;

  softSkills = [
    `Teamwork  |  Public Speaking  |  Analytical Thinking<br>
    Problem Solving  |  Time Management  |  Adaptability<br>
    Creativity  |  Attention to Detail`
  ];

  languages = [
`Ukrainian: Native<br>
English: C1 (Intermediate)<br>
French: B1 (Beginner)<br>
  `];

  skills = [
    `C++(OOP) STL Solid C++(Procedure)<br>
    HTM CSS JavaScript<br>
    AngularReact<br>
    System Programming<br><br>
    
    Visual Studio Visual Studio Code SCV-Git GitHub<br><br>
    
    Photoshop Illustrator<br>
    System analysis`
  ];

   edu = {
    title: 'IT STEP University',
    address: 'Odesa, Ukraine',
    details: 'Bachelor of Computer Science',
    date: '(09/2023 – Present)',
  };

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
today = new Date();

isDarkTheme = false;

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
  }
  
}

 