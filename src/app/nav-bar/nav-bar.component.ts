import { Component, Renderer2, OnDestroy } from '@angular/core';
import { TranslateService, TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { SecondFooterComponent } from '../second-footer/second-footer.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [TranslatePipe ,TranslateDirective, SecondFooterComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isMenuOpen: boolean = false;
  defaultLanguage: boolean = true;

  constructor(private renderer: Renderer2, private translate: TranslateService) {}
  
  changeLanguage(language: string){
    this.translate.use(language)
    if(language == 'en'){
      this.defaultLanguage = true;
    }else{
      this.defaultLanguage = false;
    }
  }

  toggleMenu() {
    if(this.isMenuOpen == false){
      this.isMenuOpen = true;
      this.updateBodyScroll();
    }else{
      this.isMenuOpen = false;
      this.updateBodyScroll();
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
}
