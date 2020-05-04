import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LinksComponent } from './components/links/links.component';
import { FaqComponent } from './components/faq/faq.component';
import { StatewiseComponent } from './components/statewise/statewise.component';
import { StatewisePipe } from './components/statewise/statewise.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinksComponent,
    FaqComponent,
    StatewiseComponent,
    StatewisePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
