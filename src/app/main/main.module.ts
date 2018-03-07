
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ButtonComponent } from './pages/buttons/buttons.component';
import { SharedModule } from '../core/modules/shared.module';
import { ColorsComponent } from './pages/colors/colors.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { CardsComponent } from './pages/cards/cards.component';


const routes: Routes = [
    {
        path : 'button',
        component : ButtonComponent
    },
    {
        path : 'color',
        component : ColorsComponent
    },
    {
        path : 'alert',
        component : AlertsComponent
    },
    {
        path : 'card',
        component : CardsComponent
    }
]

@NgModule({
    declarations: [
        MainComponent,
        ButtonComponent,
        ColorsComponent,
        AlertsComponent,
        CardsComponent 
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
     ],
    exports: [
        MainComponent
    ],
    providers: [],
})
export class MainModule {


}