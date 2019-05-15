import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProblemasComponent } from './problemas/problemas.component';
import { CadProblemaComponent} from './cad-problema/cad-problema.component';
import { CadPesquisadorComponent} from './cad-pesquisador/cad-pesquisador.component';
import { EspecialistasComponent} from './especialistas/especialistas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'problemas', component: ProblemasComponent },
  { path: 'cadproblema', component: CadProblemaComponent },
  { path: 'especialistas', component: EspecialistasComponent },
  { path: 'pesquisador', component: CadPesquisadorComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
