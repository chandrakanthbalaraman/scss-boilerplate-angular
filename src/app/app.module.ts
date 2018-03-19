import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { SharedModule } from './core/modules/shared.module';

const appRoutes: Routes = [
  {
      path: '',
      redirectTo: 'pages/alert',
      pathMatch: 'full',
  },
  {
      path        : 'pages',
      loadChildren: './main/main.module#MainModule'
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
