import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatTableModule, MatTabsModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProblemasComponent } from './problemas/problemas.component';
import { FooterRestritoComponent } from './footer-restrito/footer-restrito.component';
import { NavRestritoComponent } from './nav-restrito/nav-restrito.component';
import { CadProblemaComponent } from './cad-problema/cad-problema.component';
import { EspecialistasComponent } from './especialistas/especialistas.component';


const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatTableModule,
  MatTabsModule,
  BrowserAnimationsModule
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ProblemasComponent,
    FooterRestritoComponent,
    NavRestritoComponent,
    CadProblemaComponent,
    EspecialistasComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,    
    MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
