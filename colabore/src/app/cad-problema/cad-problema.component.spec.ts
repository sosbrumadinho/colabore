import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadProblemaComponent } from './cad-problema.component';

describe('CadProblemaComponent', () => {
  let component: CadProblemaComponent;
  let fixture: ComponentFixture<CadProblemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadProblemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
