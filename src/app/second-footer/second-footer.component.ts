import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-second-footer',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './second-footer.component.html',
  styleUrl: './second-footer.component.scss'
})
export class SecondFooterComponent {

}
