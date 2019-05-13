import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRestritoComponent } from './footer-restrito.component';

describe('FooterRestritoComponent', () => {
  let component: FooterRestritoComponent;
  let fixture: ComponentFixture<FooterRestritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterRestritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRestritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
