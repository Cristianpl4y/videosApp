import { IGenero } from './../models/IGenero.model';
import { GeneroService } from './../services/genero.service';
import { IListaFilmes, IFilmeApi } from './../models/IFilmeAPI.model';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Alerta
import { ToastController } from '@ionic/angular'; // Um Toast é uma notificação sutil 
import { IFilme } from '../models/IFilme.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  titulo: string = 'Filmes'

  // listaFilmes: IFilme[] = [
  //   {
  //     nome: 'Avatar: O Caminho da Água (2022)',
  //     lancamento : '15/12/2022 (BR)',
  //     duracao: '3h 12m',
  //     classificacao: 85,
  //     cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnmdUnztAYbfJ0jhjpN6oxwP2sb.jpg',
  //     generos: ['Ficção científica', 'Ação', 'Aventura'],
  //     pagina: '/avatar'
  //   },
  //   {
  //     nome: 'Pantera Negra: Wakanda para Sempre (2022)',
  //     lancamento : '10/11/2022 (BR)',
  //     duracao: '2h 42m',
  //     classificacao: 75,
  //     cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6tb0qiqLN9szHPA4i0kY38oaWew.jpg',
  //     generos: ['Ação', 'Aventura', 'Ficção científica'],
  //     pagina: '/pantera-negra'
  //   },
  //   {
  //     nome: 'O Troll da Montanha (2022)',
  //     lancamento : '01/12/2022 (BR)',
  //     duracao: '1h 43m',
  //     classificacao: 68,
  //     cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9z4jRr43JdtU66P0iy8h18OyLql.jpg',
  //     generos: ['Fantasia', 'Ação', 'Aventura'],
  //     pagina: 'troll-da-montanha'
  //   }
  // ]

  listaFilmes: IListaFilmes | any;

  generos: string[] = [];

  constructor(
    private alertController: AlertController, 
    private toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router
  ) {}

  buscarFilmes(evento: any){
    console.log(evento.target.value)
    const busca = evento.target.value
    // subscribe() -> quando chegar alguma coisa do servidor quero fazer algo com essa resposta.
    if(busca && busca.trim() !== ''){
      this.filmeService.buscarFilmes(busca).subscribe(dados => {
        console.log(dados);
        this.listaFilmes = dados
      }) 
    }
  }


  exibirFilme(filme: IFilmeApi){
    this.dadosService.guardaDados('filme', filme)
    this.route.navigateByUrl('/dados-filme')
  }


  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirme cancel: blah')
          }
          
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Confirme OK')
            this.apresentarToast()
          }
        },
      ],
    });

    await alert.present();
  }


  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos',
      duration: 1500,
      color: 'success'
    });

    await toast.present();
  }

  ngOnInit(){
    this.generoService.buscarGeneros().subscribe(dados => {
      console.log('Generos: ', dados.genres)
      dados.genres.forEach(genero => {
        this.generos[genero.id] = genero.name
      })

      this.dadosService.guardaDados('generos', this.generos)
    });
  }

}
