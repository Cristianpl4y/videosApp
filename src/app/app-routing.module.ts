import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'avatar',
    loadChildren: () => import('./filmes/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'pantera-negra',
    loadChildren: () => import('./filmes/pantera-negra/pantera-negra.module').then( m => m.PanteraNegraPageModule)
  },
  {
    path: 'troll-da-montanha',
    loadChildren: () => import('./filmes/troll-da-montanha/troll-da-montanha.module').then( m => m.TrollDaMontanhaPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
