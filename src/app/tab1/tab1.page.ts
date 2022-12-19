import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Alerta
import { ToastController } from '@ionic/angular'; // Um Toast é uma notificação sutil 
import { IFilme } from '../models/IFilme.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo: string = 'Vídeos App'

  listaFilmes: IFilme[] = [
    {
      nome: 'Avatar: O Caminho da Água (2022)',
      lancamento : '15/12/2022 (BR)',
      duracao: '3h 12m',
      classificacao: 85,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnmdUnztAYbfJ0jhjpN6oxwP2sb.jpg',
      generos: ['Ficção científica', 'Ação', 'Aventura'],
      pagina: '/avatar'
    },
    {
      nome: 'Pantera Negra: Wakanda para Sempre (2022)',
      lancamento : '10/11/2022 (BR)',
      duracao: '2h 42m',
      classificacao: 75,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6tb0qiqLN9szHPA4i0kY38oaWew.jpg',
      generos: ['Ação', 'Aventura', 'Ficção científica'],
      pagina: '/pantera-negra'
    },
    {
      nome: 'O Troll da Montanha (2022)',
      lancamento : '01/12/2022 (BR)',
      duracao: '1h 43m',
      classificacao: 68,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9z4jRr43JdtU66P0iy8h18OyLql.jpg',
      generos: ['Fantasia', 'Ação', 'Aventura'],
      pagina: 'troll-da-montanha'
    }
  ]

  constructor(
    private alertController: AlertController, 
    private toastController: ToastController
  ) {}

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

}
