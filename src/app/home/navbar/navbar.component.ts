import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
  } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { LoginService } from '../../providers/login.service';
import { SignupService  } from '../../providers/signup.service';
import { LogoutService } from '../../providers/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [SignupService, LoginService, LogoutService]
})

export class NavbarComponent implements OnInit {
 
  name: string;
  firstname: string;
  lastname: string;
  cin: string;
  email: string;
  password: string;
  
  users : any = [];

  signin: boolean = false;

  constructor(private signup: SignupService, private login: LoginService, private translate: TranslateService, public toastr: ToastsManager, vcr: ViewContainerRef, private logout:LogoutService) {
    
    //Translate Service init 
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    
    //Toast Service init
    this.toastr.setRootViewContainerRef(vcr);
    
   }

  ngOnInit() {
    if(localStorage.getItem("users")){
      this.users = JSON.parse(localStorage.getItem("users"));
      this.signin = this.users.isLogin;
    }
  }

  signUp () {
    
    let data = {
      firstname: this.firstname,
      lastname: this.lastname,
      cin: this.cin,
      email: this.email,
      password: this.password
    }

    this.signup.signup(data, this.translate.currentLang).subscribe(
      res => {
        let array = Object.values(res);

        this.toastr.success(array[0], 'Success!');
      },
      err => {
        this.toastr.error(err.error.message, "Oops !");
      }
    );
  }

  logIn () {

    localStorage.clear();
    this.users = [];

    let data = {
      email: this.email,
      password: this.password
    }

    this.login.login(data,  this.translate.currentLang).subscribe(
      res => {
        let user = {
          isLogin: true
        }

        this.users.push(user);

        localStorage.setItem("users", JSON.stringify(this.users));
        
        this.signin = true;

        let array = Object.values(res);
        this.toastr.success(array[0], 'Success!');

      },
      err => {
        this.toastr.error(err.error.message, "Oops !");
      }
    );

  }

  logOut () {
    
    localStorage.clear();
    this.users = [];

    let user = {
      isLogin: false
    }

    this.users.push(user);

    localStorage.setItem("users", JSON.stringify(this.users));
    
    this.signin = false;

    this.logout.logout().subscribe(res => {
        let array = Object.values(res);
        this.toastr.success(array[0], 'Success!');
      }, 
      err => {
        console.log(err.error.message);
        //this.toastr.error(err.error.message, 'Oops!');
    });
  }



}
