import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListaFilmes } from '../models/IFilmeAPI.model';
import { ToastController } from '@ionic/angular'; // Um Toast é uma notificação sutil 
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {


  lingua = 'pt-BR'
  regiao = 'BR'


  private apiURL = 'https://api.themoviedb.org/3/'
  private key = '?api_key=3c47d9a8ce86190c574f71c4af24e3fb'

  constructor(
    private http: HttpClientModule,
    public toastController: ToastController
  ) { }


  buscarFilmes(busca: string): Observable<IListaFilmes>{
    const url = `${this.apiURL}search/movie${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`

    return this.http.get<IListaFilmes>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    )
  }


  async exibirErro(erro) {
    const alert = await this.toastController.create({
      header: 'Alerta!',
      message: 'Erro ao consultar a API',
      duration: 2000, // Duração de 2s
      color: 'danger',
      position: 'middle'
    });
    await alert.present();
    return null
  }



}
