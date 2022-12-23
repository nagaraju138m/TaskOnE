import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContackUsComponent } from './contack-us.component';

describe('ContackUsComponent', () => {
  let component: ContackUsComponent;
  let fixture: ComponentFixture<ContackUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContackUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContackUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
