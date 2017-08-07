import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Main } from './main';
import { diagListComponent } from './diagList/diagList'
import { adiagListComponent } from './adiagList/adiagList'
const mainRoutes: Routes = [
  { path: 'main',component: Main,
      children: [
        {
          path: '',
          children: [
            { path: '', component: diagListComponent,outlet: 'doctor'},
            { path: '',component: adiagListComponent,outlet: 'admin'},
          ]
        }
      ]
    }
];
@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
