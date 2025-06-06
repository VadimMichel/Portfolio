import { Component } from '@angular/core';

interface Reference{
  name: string;
  comment: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  reference: Reference[] = [{
    name : 'Max Mustermann',
    comment : 'Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.'
  },
  {
    name : 'Max Mustermann',
    comment : 'Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.'
  },
  {
    name : 'Max Mustermann',
    comment : 'Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.'
  }
]
}
