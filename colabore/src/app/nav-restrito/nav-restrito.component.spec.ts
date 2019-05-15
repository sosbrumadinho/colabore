import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRestritoComponent } from './nav-restrito.component';

describe('NavRestritoComponent', () => {
  let component: NavRestritoComponent;
  let fixture: ComponentFixture<NavRestritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavRestritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRestritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
