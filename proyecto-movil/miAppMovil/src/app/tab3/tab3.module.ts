import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}

export class MenuDemo {

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Step 1'},
          {label: 'Step 2'},
          {label: 'Step 3'}
      ];
  }
}