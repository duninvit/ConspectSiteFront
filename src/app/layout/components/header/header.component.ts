import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {UserService} from '../../../shared/services/user.service';
import {User} from '../../../shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pushRightClass = 'push-right';
  id: string;
  username: string;
  role: string;

  constructor(private translate: TranslateService,
              public router: Router,
              public auth: AuthService,
              public userService: UserService) {

    this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    if (this.auth.isAuthenticated() && this.username == null) {
      this.userService.getMe()
        .subscribe(data => {
          this.username = JSON.parse(data).username;
          this.id = JSON.parse(data).id;
          this.role = JSON.parse(data).role;
        });
    }
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

  onLoggedout() {
    this.auth.logout();
  }

  changeLang(language: string) {
    this.translate.use(language);
  }

  isAdmin() {
    if (this.role === 'ROLE_ADMIN') {
      return true;
    } else {
      return false;
    }
  }
}
