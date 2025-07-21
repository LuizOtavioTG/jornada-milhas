import { Component } from '@angular/core';
import { Header } from './header/header';
import { Banner } from "./banner/banner";


@Component({
  selector: 'app-root',
  imports: [Header, Banner],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'jornada-milhas';
}
