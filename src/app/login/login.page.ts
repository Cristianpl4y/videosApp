import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string | any
  senha: string | any

  constructor(public toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }

  async alerta(text: string, cor: string) {
    const msg = await this.toastController.create({
      message: text,
      duration: 1500,
      color: cor
    });

    await msg.present();
  }

  login(){
    if(this.email === 'teste@teste.com' && this.senha === '123456'){
      this.route.navigateByUrl('/tabs/tab1')
      this.alerta('Seja bem vindo!', 'success')
    }else{
      this.alerta('usuário ou senha incorretos', 'danger')
    }
  }

}
