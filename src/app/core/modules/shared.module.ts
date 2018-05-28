
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HeaderComponent } from '../components/header/header.component';
import { AppService } from '../services/app.service';
import { DropDownDirective } from '../components/dropdown/dropdown.directive';

@NgModule({
    declarations: [
        SidebarComponent,
        HeaderComponent,
        DropDownDirective
    ],
    imports: [ 
        CommonModule,
        RouterModule
    ],
    exports: [
    
        SidebarComponent,
        HeaderComponent,
        DropDownDirective
    ],
    providers: [
        AppService
    ],
})

export class SharedModule {}