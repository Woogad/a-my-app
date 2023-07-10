import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDBPageRoutingModule } from './home-db-routing.module';

import { HomeDBPage } from './home-db.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDBPageRoutingModule
  ],
  declarations: [HomeDBPage]
})
export class HomeDBPageModule {}
