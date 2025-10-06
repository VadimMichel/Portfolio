import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core"

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
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


  constructor(private router: Router, private translate: TranslateService){}

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

  openRouterlink(url : string){
    this.router.navigateByUrl(url);
  }
}

