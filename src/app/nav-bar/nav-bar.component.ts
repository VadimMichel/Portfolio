import { Component, Renderer2, OnDestroy } from '@angular/core';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';
import { SecondFooterComponent } from '../second-footer/second-footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, SecondFooterComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  isMenuOpen: boolean = false;
  defaultLanguage: boolean = true;

  constructor(
    private renderer: Renderer2,
    private translate: TranslateService,
    private router: Router
  ) {}

  changeLanguage(language: string) {
    this.translate.use(language);
    if (language == 'en') {
      this.defaultLanguage = true;
    } else {
      this.defaultLanguage = false;
    }
  }

  toggleMenu(id: string) {
    if (this.isMenuOpen == false) {
      this.isMenuOpen = true;
      this.updateBodyScroll();
    } else if (this.isMenuOpen == true) {
      this.isMenuOpen = false;
      this.updateBodyScroll();
      if(id != ''){
        this.scrollToId(id);
      }
    }
  }

  private updateBodyScroll() {
    if (this.isMenuOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  scrollToId(id: string): void {
  this.router.navigate(['/'], { fragment: id }).then(() => {
    
    setTimeout(() => {
      const el = document.getElementById(id);
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
