import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core"

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

  constructor(private router: Router){
    this.router.events.subscribe(() => {
    this.currentRoute = this.router.url;
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

}
