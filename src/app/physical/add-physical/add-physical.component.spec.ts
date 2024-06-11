import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhysicalComponent } from './add-physical.component';

describe('AddPhysicalComponent', () => {
  let component: AddPhysicalComponent;
  let fixture: ComponentFixture<AddPhysicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPhysicalComponent]
    });
    fixture = TestBed.createComponent(AddPhysicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
