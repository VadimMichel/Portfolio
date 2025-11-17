import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

export interface Project{
  name : string;
  imgaeUrl : string;
  usedSkills : string;
  description : string;
  github : string;
  live : string;
  rowRewerse : boolean;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, TranslatePipe, TranslateDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects : Project[] = [
    {
    name : 'Join',
    imgaeUrl : 'assets/img/join.png',
    usedSkills : 'Angulat | TypeScript | HTML | CSS | Firebase',
    description : 'portfolio.project1Description',
    github : 'https://github.com/VadimMichel/join',
    live: 'join.vadim-michel.de',
    rowRewerse : false
    },
    {
    name : 'El Pollo Loco',
    imgaeUrl : 'assets/img/el_pollo_loco.png',
    usedSkills : 'JavaScript | HTML | CSS ',
    description : 'portfolio.project2Description',
    github : 'https://github.com/VadimMichel/El-pollo-loco',
    live: 'el-pollo-loco.vadim-michel.de',
    rowRewerse : true
    }
  ]
  
}
