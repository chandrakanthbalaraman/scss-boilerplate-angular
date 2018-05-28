
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ButtonComponent } from './pages/buttons/buttons.component';
import { SharedModule } from '../core/modules/shared.module';
import { ColorsComponent } from './pages/colors/colors.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { CardsComponent } from './pages/cards/cards.component';
import { LabelsComponent } from './pages/labels/labels.component';
import { DropdownComponent } from './pages/dropdown/dropdown.component';


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
    },
    {
        path : 'dropdown',
        component : DropdownComponent
    },
    {
        path : 'label',
        component : LabelsComponent
    }
]

@NgModule({
    declarations: [
        MainComponent,
        ButtonComponent,
        ColorsComponent,
        AlertsComponent,
        CardsComponent,
        LabelsComponent,
        DropdownComponent 
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