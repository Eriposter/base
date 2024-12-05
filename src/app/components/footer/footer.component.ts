import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports:[RouterModule, SharedModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent  {
  activeMenuItem: number | null = null;
  anoCorrente: number = new Date().getFullYear();

  localizacao = faMapMarkerAlt;
  telefone = faPhoneAlt;
  email = faEnvelope;


  addresses = [
    {
      description: 'footer.localizacao',
      action: null,
      icon: faMapMarkerAlt, // Usar o ícone do Font Awesome
    },
    {
      description: '+244 923 755 040',
      action: 'tel:+244923755040',
      icon: faPhoneAlt, // Ícone de telefone
    },
    {
      description: 'comercial@m3tech.ao',
      action: 'mailto:comercial@m3tech.ao',
      icon: faEnvelope, // Ícone de envelope
    },
  ];
  links = [
    {
      title: 'footer.sobre-o-cnnca',
      items: [
        {
          name: 'header.sobre.sobreNos',
          url: 'sobre',
          icon: 'assets/svg/ico-sobre.svg',
        },
        {
          name: 'header.sobre.orgaos',
          url: 'sobre/estrutura',
          icon: 'assets/svg/ico-quem-quem.svg',
        },
        {
          name: 'header.sobre.atribuicoes',
          url: 'sobre/atribuicoes',
          icon: 'assets/svg/ico-quem-quem.svg',
        }
      ]
    },
    {
      title: 'header.legislacao.titulo',
      items: [
        {
          name: 'header.legislacao.sp',
          url: 'legislacao/sector-publico',
          icon: 'assets/img/dev-icon.svg',
        },
        {
          name: 'header.legislacao.se',
          url: 'legislacao/sector-empresarial',
          icon: 'assets/img/infra-icon.svg',
        }
      ]
    },
    {
      title: 'header.imprensa.titulo',
      items: [
        {
          name: 'header.imprensa.noticias',
          url: 'sala-de-imprensa/noticias',
          icon: 'assets/svg/ico-noticias.svg',
        },
        {
          name: 'header.imprensa.galeria',
          url: 'sala-de-imprensa/galerias',
          icon: 'assets/svg/ico-fotos.svg',
        },
        {
          name: 'header.imprensa.publicacoes',
          url: 'sala-de-imprensa/publicacoes',
          icon: 'assets/img/book-closed.svg',
        },
        {
          name: 'header.imprensa.comunicados',
          url: 'sala-de-imprensa/comunicados',
          icon: 'assets/svg/ico-videos.svg',
        },
        {
          name: 'header.imprensa.faq',
          url: 'sala-de-imprensa/perguntas-frequentes',
          icon: 'assets/header/faq-icon.png',
        }

      ],
    }
  ];


  constructor(private router: Router) {}
  setActiveMenuItem(index: number): void {
    this.activeMenuItem = index;
  }
}
