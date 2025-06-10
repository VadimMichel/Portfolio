import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [SharedModule, TranslatePipe, TranslateDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
