import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

interface Logo{
  name: string;
  imgUrl: string;
}

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ SharedModule, TranslatePipe, TranslateDirective],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
logos : Logo[] = [
    {name: 'Angular',
      imgUrl: 'assets/img/logos/angular_logo.png'
    },
    {name: 'TypeScript',
      imgUrl: 'assets/img/logos/type_script_logo.png'
    },
    {name: 'JavaScript',
      imgUrl: 'assets/img/logos/java_script_logo.png'
    },
    {name: 'HTML',
      imgUrl: 'assets/img/logos/html_logo.png'
    },
    {name: 'CSS',
      imgUrl: 'assets/img/logos/css_logo.png'
    },
    {name: 'Firebase',
      imgUrl: 'assets/img/logos/firebase_logo.png'
    },
    {name: 'Git',
      imgUrl: 'assets/img/logos/git_logo.png'
    },
    {name: 'Rest Api',
      imgUrl: 'assets/img/logos/api_logo.png'
    },
    {name: 'Scrum',
      imgUrl: 'assets/img/logos/scrum_logo.png'
    }
  ]
}
