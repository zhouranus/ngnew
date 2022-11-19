import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcPersonComponent } from './lc-person.component';

describe('LcPersonComponent', () => {
  let component: LcPersonComponent;
  let fixture: ComponentFixture<LcPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LcPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LcPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
