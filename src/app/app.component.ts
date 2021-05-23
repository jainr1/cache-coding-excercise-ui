import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { navigationRoutes } from './navigation.routes';

@Component({
  selector: 'qs-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {

  private _mobileQueryListener: () => void;

  public sidenavWidth = 200;
  public sidenavWidthMin = 60;
  // public sidenavWidthMax = 200;
  public toolbarTitle: string = "Dashboard";

  routes: any[];

  mobileQuery: MediaQueryList;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  constructor(private _changeDetectorRef: ChangeDetectorRef,
    private _iconRegistry: MatIconRegistry,
    private _media: MediaMatcher,
    private _domSanitizer: DomSanitizer) {

    this.routes = navigationRoutes;

    this.mobileQuery = _media.matchMedia('(max-width: 960px)');
    this._mobileQueryListener = () => _changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  setToolbarTitle(item = {title: 'Dashboard'}) {
    this.toolbarTitle = item.title;
  }

  get activeTheme(): string {
    return localStorage.getItem('theme');
  }

  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }
}
