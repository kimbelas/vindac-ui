import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { CreateWithVinComponent } from './pages/create-with-vin/create-with-vin.component';
import { DayOneDistroComponent } from './pages/day-one-distro/day-one-distro.component';
import { VindacBuildsComponent } from './pages/vindac-builds/vindac-builds.component';
import { HelpfulServicesComponent } from './pages/helpful-services/helpful-services.component';
import { PlantPeopleComponent } from './pages/plant-people/plant-people.component';
import { GrandpasGardenShopComponent } from './pages/grandpas-garden-shop/grandpas-garden-shop.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MethodologyComponent } from './pages/methodology/methodology.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    CreateWithVinComponent,
    DayOneDistroComponent,
    VindacBuildsComponent,
    HelpfulServicesComponent,
    PlantPeopleComponent,
    GrandpasGardenShopComponent,
    TeamComponent,
    ContactComponent,
    MethodologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
