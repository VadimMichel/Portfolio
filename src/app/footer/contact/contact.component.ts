import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
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
  http = inject(HttpClient);
  @Output()massageSend = new EventEmitter<string>();


  constructor(private router: Router, private translate: TranslateService){}

  post = {
    endPoint: 'https://vadim-michel.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.sendMassage();
            this.resetFormData(ngForm);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  private resetFormData(ngForm: NgForm) {
    ngForm.reset();
    this.contactData = {
      userName: '',
      eMail: '',
      message: ''
    };
    this.acceptedPrivacy = false;
    this.usernameFocus = false;
    this.emailFocus = false;
    this.messageFocus = false;
  }

  openRouterlink(url : string){
    this.router.navigateByUrl(url);
  }

  sendMassage(){
    this.massageSend.emit();
  }
}

