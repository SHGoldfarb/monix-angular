import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ContainerComponent } from './container/container.component';
import { HeadersComponent } from './headers/headers.component';
import { TableComponent } from './table/table.component';
import { RowComponent } from './row/row.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeadersComponent,
    TableComponent,
    RowComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
