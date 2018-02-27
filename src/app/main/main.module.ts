import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ButtonComponent } from './pages/buttons/buttons.component';
import { SharedModule } from '../core/modules/shared.module';


const routes: Routes = [
    {
        path : 'button',
        component : ButtonComponent
    },
    {
        path      : '**',
        redirectTo: 'button'
    }
]

@NgModule({
    declarations: [
        MainComponent,
        ButtonComponent
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