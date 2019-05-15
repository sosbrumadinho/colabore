import { Component, OnInit } from '@angular/core';
import {Usuario} from '../shared/usuario';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formUsuario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Usuario());
  }
  createForm(usuario: Usuario) {
    this.formUsuario = this.formBuilder.group({
      usuario: [usuario.usuario],
      senha: [usuario.senha]
    });
  }

}
