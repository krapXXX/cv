import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
    styleUrls: ['../main/main.component.css']

})
export class EducationComponent {

   edu = {
    title: 'IT STEP University',
    address: 'Odesa, Ukraine',
    details: 'Bachelor of Computer Science',
    date: '(09/2023 – Present)',
  };

}
