import { Component, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isMenuOpen = false;

  constructor(private renderer: Renderer2) {}

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
    // Sicherheit: Klasse entfernen, falls Komponente zerstört wird
    this.renderer.removeClass(document.body, 'no-scroll');
  }
}
