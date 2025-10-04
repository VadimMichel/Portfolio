import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PortfolioComponent, Project } from '../portfolio.component';
import { FormsModule } from '@angular/forms';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, PortfolioComponent, FormsModule, TranslatePipe, TranslateDirective, SharedModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input()projectData!:Project;
  @Input() index!: number;
  @Input() totalProjects!: number;
}
