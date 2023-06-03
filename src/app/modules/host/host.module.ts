import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostRoutingModule } from './host-routing.module';
import { HostComponent } from './host.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";


@NgModule({
    declarations: [
        HostComponent
    ],
    imports: [
        CommonModule,
        HostRoutingModule,
        NavbarComponent
    ]
})
export class HostModule { }
