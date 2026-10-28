
import { Component } from '@angular/core';

@Component({
  selector: 'app-expertise',
  standalone: true,
  templateUrl: './expertise.html',
  styleUrl: './expertise.css'
})
export class Expertise {
  areas = [
    {
      number: '01',
      title: 'Tecnologia',
      description:
        'Soluções digitais para modernizar processos, integrar serviços e ampliar oportunidades.'
    },
    {
      number: '02',
      title: 'Desenvolvimento de Negócios',
      description:
        'Estruturação de operações comerciais, produtos e novos modelos de negócios.'
    },
    {
      number: '03',
      title: 'Parcerias Estratégicas',
      description:
        'Conexão entre empresas, profissionais e soluções para desenvolver novos mercados.'
    }
  ];
}
