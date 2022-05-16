import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {GalleryComponent} from './pages/gallery/gallery.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatChipsModule} from "@angular/material/chips";
import { ListCardComponent } from './component/list-card/list-card.component';
import { SearchCompComponent } from './component/search-comp/search-comp.component';
import { SearchComponent } from './component/search-comp/search/search.component';
import { ResultComponent } from './component/search-comp/result/result.component';
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    GalleryComponent,
     NavbarComponent,
     ListCardComponent,
     SearchCompComponent,
     SearchComponent,
     ResultComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        MatSliderModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        HttpClientModule,
        MatCardModule,
        MatGridListModule,
        MatChipsModule,
        MatInputModule,
        MatPaginatorModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
