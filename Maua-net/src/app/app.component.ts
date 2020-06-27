import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maua-angular';
  estiloBotao(){
    return{
      backgroundColor: "#363636",
      padding: '3px',
      width: '10%',
      border: 'none'
    }
  }
  obterClassesRodape() {
    return ['rodape']
  }
  
}