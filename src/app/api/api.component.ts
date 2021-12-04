import { Component, OnInit } from '@angular/core';
import { Imagem } from '../models/api';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
imagens:any;
erro:any;

//Criei ApiComponent e vou colocar no construtor declarando ApiService para
//fazer a injeção de serviços
  constructor(private apiService: ApiService) { 
  
    this.pegarImagem();
    
  }

  ngOnInit(): void {
  }

  pegarImagem(){
    this.apiService.getImg().subscribe(
      (data:Imagem) => {
        this.imagens =data;
        console.log('Recebido com sucesso',data);
      },
      (error:any) =>{
        this.erro =error;
        console.log('erro!', error);
      }
    );
  }
}

