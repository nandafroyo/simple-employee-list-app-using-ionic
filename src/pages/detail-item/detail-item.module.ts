import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailItemPage } from './detail-item';

@NgModule({
  declarations: [
    DetailItemPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailItemPage),
  ],
})
export class DetailItemPageModule {}
