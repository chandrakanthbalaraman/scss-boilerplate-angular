
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
    declarations: [
        SidebarComponent,
        HeaderComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule
    ],
    exports: [
    
        SidebarComponent,
        HeaderComponent
    ],
    providers: [],
})

export class SharedModule {}