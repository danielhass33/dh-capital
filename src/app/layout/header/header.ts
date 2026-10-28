
import { Component, signal } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuOpen = signal(false);

  navigation = [
    { label: 'Início', path: '/', exact: true },
    { label: 'Sobre', path: '/sobre', exact: false },
    { label: 'Atuação', path: '/atuacao', exact: false },
    { label: 'Portfólio', path: '/portfolio', exact: false },
    { label: 'Parcerias', path: '/parcerias', exact: false }
  ];

  toggleMenu(): void {
    this.menuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
