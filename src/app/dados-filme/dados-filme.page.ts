import { IFilmeApi } from './../models/IFilmeAPI.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: IFilmeApi | any;

  generos: string[] = []

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.pegaDados('filme')
    this.generos = this.dadosService.pegaDados('generos')
    console.log('Filme Enviado', this.filme)
  }

}
