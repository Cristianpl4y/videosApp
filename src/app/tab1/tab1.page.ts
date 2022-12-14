import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Alerta
import { ToastController } from '@ionic/angular'; // Um Toast é uma notificação sutil 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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
