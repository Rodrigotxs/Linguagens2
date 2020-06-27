import { Component } from '@angular/core';


@Component({
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html',
  styleUrls: ['./aluno-cadastro.component.css']
})
export class AlunoCadastroComponent {

  salvar(pessoaForm) {
    const nome = pessoaForm.value.nome;
    const idade = pessoaForm.value.idade;
    const email = pessoaForm.value.email;
    const opcao = pessoaForm.value.opcao;
    console.log(`Nome: ${nome}, Idade: ${idade}, Email: ${email}, Curso: ${opcao} `);
  }
  opcoes = ['Administração', 'Design', 'Engenharia Civil', 'Engenharia de Computação'];
 
  alunos = [
    { nome: "José" },
    { nome: "Maria" }
    ];
  onAdicionarAluno(nomeAluno) {
      this.alunos = [{nome: nomeAluno}, ...this.alunos];
    }
}
