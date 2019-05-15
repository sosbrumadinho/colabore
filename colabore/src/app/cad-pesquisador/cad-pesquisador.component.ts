import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from '../shared/usuario';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { rowsAnimation } from '../animations/animations';



@Component({
  selector: 'app-cad-pesquisador',
  templateUrl: './cad-pesquisador.component.html',
  animations: [rowsAnimation],
  styleUrls: ['./cad-pesquisador.component.css']
})
export class CadPesquisadorComponent implements OnInit {
  formPesquisador: FormGroup;
  displayedColumns = ['areatb'];
  dataSource: MatTableDataSource<Area>;

  constructor(private formBuilder: FormBuilder) { 
    const areas: Area[] = [];
    this.dataSource = new MatTableDataSource(areas);
  }

  ngOnInit() {
    this.createForm(new Usuario());
  }
  createForm(pesquisador: Usuario) {
    this.formPesquisador = this.formBuilder.group({
      nome: [pesquisador.usuario],
      instituicao: [pesquisador.instituicao],
      email: [pesquisador.email],
      senha: [pesquisador.senha]
    });
  }


  // Creates new area.
  createNewArea(areaInput: string): Area {
    return {
      area: areaInput
    };
  }

  addRow(area: string) {
    if (area) {
      this.dataSource.data.push(this.createNewArea(area));
      this.dataSource.filter = '';
    }

  }
}


export interface Area {
  area: string;
}
