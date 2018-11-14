import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';
import { DevelopersComponent } from './developers/developers.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'developers', component: DevelopersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
