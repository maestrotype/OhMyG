import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent }      from './blog/blog.component';
import { MainPageComponent }      from './main-page/main-page.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo: 'main-page' },
  { path: 'blog', component: BlogComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],    
  exports: [ RouterModule ]
})
export class AppRoutingModule {}