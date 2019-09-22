import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { AuthInterceptor } from '@http-interceptors/auth.interceptor';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { DataService } from '@services/data.service';
import { GridComponent } from '@components/grid/grid.component';
import { MemberCellRendererComponent } from '@components/member-cell-renderer/member-cell-renderer.component';
import { LocationCellRendererComponent } from '@components/location-cell-renderer/location-cell-renderer.component';

@NgModule({
    declarations: [
        AppComponent,
        GridComponent,
        MemberCellRendererComponent,
        LocationCellRendererComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        HttpClientModule,
        AgGridModule.withComponents([ MemberCellRendererComponent, LocationCellRendererComponent]),
        AppRoutingModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        DataService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
