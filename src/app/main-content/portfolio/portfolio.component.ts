import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';

export interface Project{
  name : string;
  imgaeUrl : string;
  usedSkills : string;
  description : string;
  github : string;
  rowRewerse : boolean;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects : Project[] = [
    {
    name : 'Join',
    imgaeUrl : 'assets/img/join.png',
    usedSkills : 'Angulat | TypeScript | HTML | CSS | Firebase',
    description : 'Task manager inspired by the Kanban System. Create and organize tasks using and drop functions, assign useres and categories.',
    github : '#',
    rowRewerse : false
    },
    {
    name : 'El Pollo Loco',
    imgaeUrl : 'assets/img/el_pollo_loco.png',
    usedSkills : 'JavaScript | HTML | CSS ',
    description : 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the chicken.',
    github : '#',
    rowRewerse : true
    }
  ]
  
}
