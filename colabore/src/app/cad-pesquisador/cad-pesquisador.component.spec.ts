import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadPesquisadorComponent } from './cad-pesquisador.component';

describe('CadProblemaComponent', () => {
  let component: CadPesquisadorComponent;
  let fixture: ComponentFixture<CadPesquisadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadPesquisadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadPesquisadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
