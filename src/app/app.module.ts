import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppComponentLinks } from './links/links.component';
import { AppTopPanel } from './top-panel/top-panel.component';

import { LinksService } from './services/links.service';
import { AppService } from "./services/app.service";

enableProdMode();

const appRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: '**', component: AppComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  declarations: [
    AppComponent,
    AppTopPanel,
    AppComponentLinks
  ],
  providers: [
      AppService,
      LinksService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
