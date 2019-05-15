import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Problema } from '../shared/problema';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { rowsAnimation } from '../animations/animations';



@Component({
  selector: 'app-cad-problema',
  templateUrl: './cad-problema.component.html',
  animations: [rowsAnimation],
  styleUrls: ['./cad-problema.component.css']
})
export class CadProblemaComponent implements OnInit {
  formProblema: FormGroup;
  displayedColumns = ['areatb'];
  dataSource: MatTableDataSource<Area>;

  constructor(private formBuilder: FormBuilder) { 
    const areas: Area[] = [];
    this.dataSource = new MatTableDataSource(areas);
  }

  ngOnInit() {
    this.createForm(new Problema());
  }
  createForm(problema: Problema) {
    this.formProblema = this.formBuilder.group({
      titulo: [problema.titulo],
      descricao: [problema.descricao]
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
