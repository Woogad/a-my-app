import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeResultPageRoutingModule } from './home-result-routing.module';

import { HomeResultPage } from './home-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeResultPageRoutingModule
  ],
  declarations: [HomeResultPage]
})
export class HomeResultPageModule {}
