import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.scss']
})
export class PrimeiroComponenteComponent implements OnInit {
nome: string;
arrayValores =["Marcos", "Lucio", 3, 1, "Gustavo"];
  constructor() { }

  ngOnInit(): void {
    
    }
    criarNome(novoNome:string){
      this.nome = novoNome;
  }

}
