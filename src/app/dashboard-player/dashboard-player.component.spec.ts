import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPlayerComponent } from './dashboard-player.component';

describe('DashboardPlayerComponent', () => {
  let component: DashboardPlayerComponent;
  let fixture: ComponentFixture<DashboardPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
