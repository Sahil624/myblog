import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
          MatSidenavModule,
          MatListModule,
          MatButtonModule,
          MatIconModule,
          MatCardModule
        } from "@angular/material";
import { FlexLayoutModule, BREAKPOINTS, DEFAULT_BREAKPOINTS } from "@angular/flex-layout";

import { LandingPageComponent } from './_components/landing-page/landing-page.component';
import { AboutComponent } from './_components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule
  ],
  providers: [{provide: BREAKPOINTS, useValue: DEFAULT_BREAKPOINTS}],
  bootstrap: [AppComponent]
})
export class AppModule { }
