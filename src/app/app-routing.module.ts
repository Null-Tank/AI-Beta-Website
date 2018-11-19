import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';
import { DevelopersComponent } from './developers/developers.component';
import { FeaturesComponent } from './features/features.component';
import { PageComponent } from './page/page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'developers', component: DevelopersComponent },
  { path:'features', component: FeaturesComponent},
  { path: '**', component: PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
