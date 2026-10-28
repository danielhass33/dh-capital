
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio-preview.html',
  styleUrl: './portfolio-preview.css'
})
export class PortfolioPreview {
  solutions = [
    {
      category: 'AUTOMOTIVO',
      name: 'Sexta Marcha',
      description:
        'Hub de soluções digitais para profissionais do setor automotivo.',
      path: '/portfolio/sexta-marcha'
    },
    {
      category: 'TECNOLOGIA FINANCEIRA',
      name: 'Microcrédito Digital',
      description:
        'Iniciativas tecnológicas voltadas à digitalização de processos de microcrédito.',
      path: '/portfolio'
    },
    {
      category: 'SOLUÇÕES EMPRESARIAIS',
      name: 'Operações Digitais',
      description:
        'Projetos de tecnologia e estruturação de operações para diferentes mercados.',
      path: '/portfolio'
    }
  ];
}
