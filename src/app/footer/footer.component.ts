import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core"
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, FormsModule, CommonModule, ContactComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentRoute = "";
  currentLang: string = 'en';

  constructor(private router: Router, private translate: TranslateService){
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang || this.translate.getDefaultLang();
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

  shouldShowExtra(): boolean {
    return !(this.currentRoute.includes('privacy-policy') || this.currentRoute.includes('legal-notice'));
  }

  openLegalNotice(){
    this.router.navigateByUrl('/legal-notice');
  }

  openRouterlink(url : string){
    this.router.navigateByUrl(url);
  }

  scrollToHero(): void {
    this.router.navigate(['/'], { fragment: 'hero' }).then(() => {
    
      setTimeout(() => {
        const el = document.getElementById('hero');
        if (el) {
          const style = getComputedStyle(el);
          const marginTop = parseInt(style.marginTop, 10) || 0;
          const top = el.getBoundingClientRect().top + window.scrollY - marginTop;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 50);
    });
  }
}
