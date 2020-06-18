import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css'],
})
export class CursoCadastroComponent {
  @Output() cursoAdicionada = new EventEmitter();
  adicionar(titulo, descricao) {
    const curso = {
      titulo: titulo,
      descricao: descricao,
      imagem: 'https://maua.br/img/home/engenharia.jpg',
    };
    this.cursoAdicionada.emit(curso);
  }
}