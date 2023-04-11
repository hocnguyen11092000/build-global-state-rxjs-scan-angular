import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState } from 'src/store/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string = '';
  passWord: string = '';
  constructor(private authState: AuthState, private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.userName && this.passWord) {
      this.authState.executeAction('STORE_USER_ACTTION', {
        user: {
          userName: this.userName,
          passWord: this.passWord,
        },
      });

      this.router.navigateByUrl('/');
    }
  }
}
