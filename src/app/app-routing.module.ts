import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { GalleryComponent }   from './gallery/gallery.component';
import { AboutComponent }      from './about/about.component';
import { ContactComponent }  from './contact/contact.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}