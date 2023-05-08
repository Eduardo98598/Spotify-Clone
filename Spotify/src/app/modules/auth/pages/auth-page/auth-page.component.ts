import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
formLogin:FormGroup = new FormGroup({});
errorSesssion: boolean = false;
  constructor(private authService: AuthService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',
        [
          Validators.required,
          Validators.email
        ]
        ),
        password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
      )
  }

  sendLogin() : void{
    const {email,password} = this.formLogin.value
    this.authService.sendCredentials(email,password)
    
    .subscribe({
    next: (response) => {

      const {tokenSession,data} = response;
      console.log('exito');
this.cookie.set('token',tokenSession,4,'/');
this.router.navigate(['/','tracks'])
    },
    error: (e) => {
      this.errorSesssion = true;
      console.log('ocurrio un error en tu password');
    },
    complete: () => {
      
    }
    })
  }

  /* 
  response => { 
      const {tokenSession,data} = response;
      console.log('exito');
this.cookie.set('token',tokenSession,4,'/');
    },
      err => {
        this.errorSesssion = true;
      console.log('ocurrio un error en tu password');
    }
  */
}

