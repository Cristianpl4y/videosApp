import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrollDaMontanhaPageRoutingModule } from './troll-da-montanha-routing.module';

import { TrollDaMontanhaPage } from './troll-da-montanha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrollDaMontanhaPageRoutingModule
  ],
  declarations: [TrollDaMontanhaPage]
})
export class TrollDaMontanhaPageModule {}
