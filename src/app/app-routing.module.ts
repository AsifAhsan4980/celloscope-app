import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import {GalleryComponent} from "./pages/gallery/gallery.component";

const routes : Routes = [
  {path: '' , component: HomeComponent, pathMatch: 'full'},
  {path: 'gallery', component: GalleryComponent, pathMatch: 'full'}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
