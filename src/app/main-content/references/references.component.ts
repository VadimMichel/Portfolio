import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

interface Reference{
  name: string;
  comment: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [SharedModule, TranslatePipe, TranslateDirective],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  reference: Reference[] = [{
    name : 'Simon Fuchs',
    comment : 'references.reference1'
  },
  {
    name : 'Robin Angelé',
    comment : 'references.reference2'
  },
  {
    name : 'Viktor Naumann',
    comment : 'references.reference3'
  }
]
}
