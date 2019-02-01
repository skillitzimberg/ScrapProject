import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'index', component: AppComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second',
    component: SecondComponent,
    children: [{ path: 'third', component: ThirdComponent }]
  },
  { path: 'fourth', component: FourthComponent },
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
