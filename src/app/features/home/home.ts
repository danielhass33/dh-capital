
import { Component } from '@angular/core';

import { Hero } from './components/hero/hero';
import { AboutPreview } from './components/about-preview/about-preview';
import { Expertise } from './components/expertise/expertise';
import { PortfolioPreview } from './components/portfolio-preview/portfolio-preview';
import { ContactCta } from './components/contact-cta/contact-cta';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    AboutPreview,
    Expertise,
    PortfolioPreview,
    ContactCta
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
