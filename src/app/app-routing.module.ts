import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { CreateWithVinComponent } from './pages/create-with-vin/create-with-vin.component';
import { DayOneDistroComponent } from './pages/day-one-distro/day-one-distro.component';
import { VindacBuildsComponent } from './pages/vindac-builds/vindac-builds.component';
import { HelpfulServicesComponent } from './pages/helpful-services/helpful-services.component';
import { PlantPeopleComponent } from './pages/plant-people/plant-people.component';
import { GrandpasGardenShopComponent } from './pages/grandpas-garden-shop/grandpas-garden-shop.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MethodologyComponent } from './pages/methodology/methodology.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'methodology', component: MethodologyComponent },
  { path: 'create-with-vin', component: CreateWithVinComponent },
  { path: 'day-one-distro', component: DayOneDistroComponent },
  { path: 'vindac-builds', component: VindacBuildsComponent },
  { path: 'helpful-services', component: HelpfulServicesComponent },
  { path: 'plant-people', component: PlantPeopleComponent },
  { path: 'grandpas-garden-shop', component: GrandpasGardenShopComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
