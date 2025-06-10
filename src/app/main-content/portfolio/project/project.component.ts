import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PortfolioComponent, Project } from '../portfolio.component';
import { FormsModule } from '@angular/forms';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, PortfolioComponent, FormsModule, TranslatePipe, TranslateDirective],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input()projectData!:Project;
  @Input() index!: number;
  @Input() totalProjects!: number;
}
