import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridficheevalcompComponent } from './aggridficheevalcomp.component';

describe('AggridficheevalcompComponent', () => {
  let component: AggridficheevalcompComponent;
  let fixture: ComponentFixture<AggridficheevalcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridficheevalcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggridficheevalcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
