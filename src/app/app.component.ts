import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'country-gk';

  @HostBinding('class') className = '';
  darkModeActive = false;

  ngOnInit(): void {
    this.toggleTheme();
  }

  toggleTheme() {
    this.darkModeActive = !this.darkModeActive;
    this.className = this.darkModeActive ? 'darkMode' : '';

    let body = document.body;
    body.classList.toggle('darkMode');
  }
}
