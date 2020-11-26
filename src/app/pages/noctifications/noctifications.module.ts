import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoctificationsPageRoutingModule } from './noctifications-routing.module';

import { NoctificationsPage } from './noctifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoctificationsPageRoutingModule
  ],
  declarations: [NoctificationsPage]
})
export class NoctificationsPageModule {}
