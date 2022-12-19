import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular'; // Um Toast é uma notificação sutil 
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IListaGenero } from '../models/IGenero.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua = 'pt-BR'

  private apiURL = 'https://api.themoviedb.org/3/'
  private key = '?api_key=3c47d9a8ce86190c574f71c4af24e3fb'

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarGeneros():Observable<IListaGenero>{
    const url = `${this.apiURL}genre/movie/list${this.key}&language=${this.lingua}`;

    return this.http.get<IListaGenero>(url).pipe(
      map(retorno => retorno)
    )
  }
}
