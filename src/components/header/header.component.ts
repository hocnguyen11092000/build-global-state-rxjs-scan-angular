import { Component, OnInit } from '@angular/core';
import { IAuthState } from 'src/store/auth.service';
import { globalState } from 'src/store/index.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private globalStateService: globalState) {}
  user: IAuthState = {};

  ngOnInit(): void {
    this.globalStateService?.getSingleState('auth')?.subscribe((val) => {
      console.log(val);

      this.user = val || {};
    });
  }
}
