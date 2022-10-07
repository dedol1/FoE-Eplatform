import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerSideNavComponent } from './lecturer-side-nav.component';

describe('LecturerSideNavComponent', () => {
  let component: LecturerSideNavComponent;
  let fixture: ComponentFixture<LecturerSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturerSideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecturerSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
