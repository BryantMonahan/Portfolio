import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MatTabsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-website');
}
