import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent {
  cursos = [
    {
      titulo: 'Administração',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni saepe nisi corporis earum expedita itaque maxime corrupti eligendi provident ipsum pariatur aut quidem assumenda, magnam voluptates, harum, tempora exercitationem.',
      imagem: 'https://maua.br/img/upload/092018/administracao-14102942.png',
    },
    {
      titulo: 'Design',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni saepe nisi corporis earum expedita itaque maxime corrupti eligendi provident ipsum pariatur aut quidem assumenda, magnam voluptates, harum, tempora exercitationem.',
      imagem: 'https://maua.br/img/upload/092018/design-14102950.png',
    },
    {
      titulo: 'Engenharia de Alimentos',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni saepe nisi corporis earum expedita itaque maxime corrupti eligendi provident ipsum pariatur aut quidem assumenda, magnam voluptates, harum, tempora exercitationem.',
      imagem: 'https://maua.br/img/upload/092018/engenharia-alimentos-14103003.png',
    },
    {
      titulo: 'Engenharia Civil',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni saepe nisi corporis earum expedita itaque maxime corrupti eligendi provident ipsum pariatur aut quidem assumenda, magnam voluptates, harum, tempora exercitationem.',
      imagem: 'https://maua.br/img/upload/092018/engenharia-civil-14103012.png',
    },
    {
      titulo: 'Engenharia Computação',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni saepe nisi corporis earum expedita itaque maxime corrupti eligendi provident ipsum pariatur aut quidem assumenda, magnam voluptates, harum, tempora exercitationem.',
      imagem: 'https://maua.br/img/upload/092018/engenharia-computacao-14103023.png',
    },
    {
      titulo: 'Engenharia de Controle e Automação',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni saepe nisi corporis earum expedita itaque maxime corrupti eligendi provident ipsum pariatur aut quidem assumenda, magnam voluptates, harum, tempora exercitationem.',
      imagem: 'https://maua.br/img/upload/092018/engenharia-controle-automacao-14103035.png',
    },
    {
      titulo: 'Engenharia Elétrica',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni saepe nisi corporis earum expedita itaque maxime corrupti eligendi provident ipsum pariatur aut quidem assumenda, magnam voluptates, harum, tempora exercitationem.',
      imagem: 'https://maua.br/img/upload/092018/engenharia-eletrica-14103052.png',
    },
    {
      titulo: 'Engenharia Eletrônica',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni saepe nisi corporis earum expedita itaque maxime corrupti eligendi provident ipsum pariatur aut quidem assumenda, magnam voluptates, harum, tempora exercitationem.',
      imagem: 'https://maua.br/img/upload/092018/engenharia-eletronica-14103106.png',
    },
    {
      titulo: 'Engenharia Química',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni saepe nisi corporis earum expedita itaque maxime corrupti eligendi provident ipsum pariatur aut quidem assumenda, magnam voluptates, harum, tempora exercitationem.',
      imagem: 'https://maua.br/img/upload/092018/engenharia-quimica-14103146.png',
    },
  ];

  onAdicionarCurso(curso) {
    this.cursos = [curso, ...this.cursos];
    }
}