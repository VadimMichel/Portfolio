import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core"

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, FormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  userName: string = "";
  eMail: string = "";
  message: string = "";
  usernameFocus: boolean = false;
  emailFocus: boolean = false;
}
