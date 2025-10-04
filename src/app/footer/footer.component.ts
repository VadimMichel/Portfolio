import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core"

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, FormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  contactData :{ userName : string;
    eMail : string;
    message : string;
  } = {
    userName : "",
    eMail : "",
    message : ""
  }

  usernameFocus: boolean = false;
  emailFocus: boolean = false;
  messageFocus: boolean = false;
  acceptedPrivacy: boolean = false;
  mailTest = true;
  http = inject(HttpClient);
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

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
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
