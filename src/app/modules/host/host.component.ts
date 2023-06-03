import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent {

  public breadCrumbs: string[] = [];

  constructor(
    private _router: Router,
    private _authService: AuthService,
  ) {
    this._authService.init();
  }

  public ngOnInit(): void {
    this.breadCrumbs = this.getBreadCrumb(this._router.url);
    this._router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.breadCrumbs = this.getBreadCrumb((event as NavigationEnd).url);
      }
    });
  }


  public getBreadCrumb(url: string): string[] {

    let breadCrumb: string[] = [];
      const urlParts = url.split('/');
      urlParts.forEach((part: string) => {
        if (part !== '' && part !== 'host') {
          breadCrumb.push(part);
        }
      });

    return breadCrumb;
  }

}
