import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isMenuOpen = false;

  toggleMenu() {
    if(this.isMenuOpen == false){
      this.isMenuOpen = true;
    }else{
      this.isMenuOpen = false;
    }
  }
}
